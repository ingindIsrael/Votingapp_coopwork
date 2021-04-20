"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vote, Comment
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    
    if user == None:
      return jsonify({"msg": "Bad username or password"}), 401
    userID = user.id
    access_token = create_access_token(identity=userID)
    return jsonify(access_token=access_token, user=user.serialize())

@api.route("/comment", methods=["POST"])
@jwt_required()
def comment():
       
    return jsonify(access_token=access_token, user=user.serialize())

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
    choicePicked = request.get_json()
    db.session.commit()
    return jsonify(access_token=access_token, user=user.serialize())

@api.route('/changemyvote/<int:voteID>', methods=['DELETE'])
#Delete comment with the id = voteID.
def changeMYvote(voteID):
    vote = Vote.query.get(voteID)
    if vote is None:
        raise APIException('VoteID number wrong try a valid one', status_code=404)
    db.session.delete(vote)
    db.session.commit()
    return f"The vote with id number {voteID} has been change under your request", 200
# this endpoint should delete the vote if the user id is in the event id and
# should request that the user send a new vote or redirect it to the voting endpoint
# example(vote.id = 106, user.id = 78493)

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

