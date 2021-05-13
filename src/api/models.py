from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    fname = db.Column(db.String(80), unique=False, nullable=False)
    lname = db.Column(db.String(80), unique=False, nullable=False)
    workerPosition = db.Column(db.String(80), unique=False, nullable=False)
    admin = db.Column(db.Boolean(), unique=False, nullable=False)
    phoneNumber = db.Column(db.String, unique=True, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "fname": self.fname,
            "lname": self.lname,
            "workerposition": self.workerPosition,
            "admin": self.admin,
            "phoneNumber": self.phoneNumber
            # do not serialize the password, its a security breach
        }
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userID = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    commentTXT = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return '<Comment %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "userID": self.userID,
            "commentTXT": self.commentTXT,
            
                        
            # do not serialize the password, its a security breach
        }
class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proposalID = db.Column(db.Integer, db.ForeignKey('proposal.id'), nullable=False)
    userID = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    

    def __repr__(self):
        return '<Vote %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "proposalID": self.proposalID,
            "userID": self.userID
            
           
                        
            # do not serialize the password, its a security breach
        }
class Proposal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proposalNAME = db.Column(db.String, primary_key=False)
    winner = db.Column(db.Boolean, primary_key=False)
    eventID = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)
    votes = db.relationship("Vote", backref="proposal", lazy=True)

    def __repr__(self):
        return '<Proposal %r>' % self.proposalNAME

    def serialize(self):
        return {
            "id": self.id,
            "proposalNAME": self.proposalNAME,
            "winner": self.winner,
            "eventID": self.eventID,
                     
            # do not serialize the password, its a security breach
        }
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    eventNAME = db.Column(db.String, primary_key=False)
    eventDATE = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    active = db.Column(db.Boolean, primary_key=False)
    proposalNAME = db.relationship("Proposal", backref="event", lazy=True)

    def __repr__(self):
        return '<Event %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "eventNAME": self.eventNAME,  
            "eventDATE": self.eventDATE,
            "active": self.active
            # do not serialize the password, its a security breach
        }