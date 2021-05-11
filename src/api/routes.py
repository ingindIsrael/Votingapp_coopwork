"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vote, Comment, Event, Proposal
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required

import os
from twilio.rest import Client

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    print("*******************", email)
    print("*******************", password)
    if user == None:
      return jsonify({"msg": "Bad username or password"}), 401
    userID = user.id
    access_token = create_access_token(identity=userID)
    print("*******************", type(access_token), access_token  )
    return jsonify(access_token=access_token.decode("utf-8") , user=user.serialize()), 200
    
@api.route("/comment", methods=["POST"])
@jwt_required()
def createComment():
    user_id = get_jwt_identity()
    
    body = request.get_json()
    
    comment = Comment(commentTXT = body, userID = user_id)
    
    db.session.add(comment)
    db.session.commit()
    return jsonify(comment.serialize()), 200
    # {"message": f'the user with id number {user_id} made a comment'}
@api.route("/comments", methods=["GET"])
def checkComents():
    all_comment = Comment.query.all()
    all_comment = list(map(lambda x: x.serialize(), all_comment))
    return jsonify(all_comment), 200 

@api.route('/deletemycomment/<int:commentID>', methods=['DELETE'])
#Delete comment with the id = commentID.
def deleteCOMMENT(commentID):
    comment = Comment.query.get(commentID)
    if comment is None:
        raise APIException('Comment not found', status_code=404)
    db.session.delete(comment)
    db.session.commit()
    return f"The comment with id number {commentID} has been eliminated", 200

@api.route("/vote", methods=["POST"])
@jwt_required()
def vote():
    user_id = get_jwt_identity()
    body = request.get_json()
    single_vote = Vote(eventID = body["eventID"], proposalID = body["proposalID"], userID = user_id)
    print("**************VOTE****************", single_vote)
    db.session.add(single_vote)
    db.session.commit()
    return f'the user with id number {user_id} has voted', 200

@api.route("/votes", methods=["GET"])
def votes():
    all_people = Vote.query.all()
    all_people = list(map(lambda x: x.serialize(), all_people))
    return jsonify(all_people), 200


# @api.route('/changemyvote/<int:voteID>', methods=['DELETE'])
# #Delete comment with the id = voteID.
# def changeMYvote(voteID):
#     vote = Vote.query.get(voteID)
#     if vote is None:
#         raise APIException('VoteID number wrong try a valid one', status_code=404)
#     db.session.delete(vote)
#     db.session.commit()
#     return f"The vote with id number {voteID} has been change under your request", 200
# # this endpoint should delete the vote if the user id is in the event id and
# # should request that the user send a new vote or redirect it to the voting endpoint
# # example(vote.id = 106, user.id = 78493)

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


@api.route('/users', methods=['GET'])
def get_All_Users():
    users = User.query.all() 
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

@api.route("/createuser", methods=["POST"])
@jwt_required()
def registerAUser():
    current_user = get_jwt_identity()
    user1 = User.query.get(current_user)
    userA = user1.admin
    if userA is False:
        raise APIException("You need administrative power to register a user", status_code=400)
    if user1.admin is True:
        body = request.get_json()

        if body is None:
                raise APIException("You need to specify the request body as a json object", status_code=400)
        email = body['email']
        emailExist = User.query.filter_by(email = email).first()
       
        if emailExist is not None:
            raise APIException("This email is already register, please try a different one", status_code=400)
        newUser = User(email=body['email'], password=body['password'], fname=body['fname'], lname=body['lname'], workerPosition=body['workerPosition'], admin=body['admin'], phoneNumber=body['phone'])
        db.session.add(newUser)
        db.session.commit()
        userID = newUser.id
        access_token = create_access_token(identity=userID)
    return f'the user with id number {newUser.id} was created', 200

@api.route('/deleteuser', methods=['DELETE'])
@jwt_required()
def deleteUser():
    current_user = get_jwt_identity()
    user1 = User.query.get(current_user)
    userA = user1.admin
    if userA is False:
        raise APIException("You need administrative power to register a user", status_code=400)
    if user1.admin is True:
        body = request.get_json()

        if body is None:
                raise APIException("You need to specify the request body as a json object", status_code=400)
        
        user = User(id=body['id'], email=body['email'], fname=body['fname'])
    
        # userExist = User.query.filter_by(email = email, id=id, fname=fname)
        # if userExist is None:
        #     raise APIException("The id, name and email combination is not registered, please try a different one", status_code=404)

        user = User.query.get(user.id)
        if user is None:
            raise APIException('user not found', status_code=404)
        db.session.delete(user)
        db.session.commit()
    return f"The user with id number {user.id} has been eliminated", 200

@api.route('/sms', methods=['GET'])
def sendSMS():
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    users = User.query.all() 
    all_users = list(map(lambda x: x.serialize(), users))
    no_phone = []

    def sendTXT(toNumber): 
        message = client.messages \
                        .create(
                            body="Today is the last day to vote, remember to go to www.coopwork.com and participate. your opinion is very important to achieve a true democracy at work.",
                            from_='+17739170829',
                            to=toNumber
                        )
    for x in all_users:
        if x["phoneNumber"] is None:
            no_phone.append(" "+ x["fname"] +" "+ x["lname"])
    print(no_phone)
    
    if len(no_phone) > 0:
        joined_string = ",".join(no_phone)
        error = f'the following user(s) {joined_string} does not have any phone number register'
    # sendTXT(x["phoneNumber"])
    succ = f"Your message was sent to the rest of the {len(all_users) - len(no_phone)} user(s)"
    return jsonify({"errormsg": error, "succmsg": succ}, 200)

@api.route("/createevent", methods=["POST"])
@jwt_required()
def registerEvent():
    current_user = get_jwt_identity()
    user1 = User.query.get(current_user)
    userA = user1.admin
    if userA is False:
        raise APIException("You need administrative power to register an event", status_code=400)
    if user1.admin is True:
             
        body = request.get_json()

        if body is None:
                raise APIException("You need to specify the request body as a json object", status_code=400)
       
        newEvent = Event(eventNAME=body['eventNAME'], eventDATE=body['eventDATE'])
        db.session.add(newEvent)
        db.session.commit()

        listProposal = body["listPROPOSAL"]
        
        def addProposal(proposalTitle):
            newProposal1 = Proposal(proposalNAME = proposalTitle, active=True, winner=False, eventID=newEvent.id)
            db.session.add(newProposal1)
        list(map(lambda x: addProposal(x), listProposal))
        
        
        
        
        db.session.commit()
        
    return f'the event was created with proposals now users can vote for one of this', 200