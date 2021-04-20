from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    fname = db.Column(db.String(80), unique=False, nullable=False)
    lname = db.Column(db.String(80), unique=False, nullable=False)
    workerPosition = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "fname": self.fname,
            "lname": self.lname,
            "workerposition": self.workerPosition,
            
            # do not serialize the password, its a security breach
        }
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userID = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    commentTXT = db.Column(db.String(80), unique=False, nullable=False)
    commentLINK = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Comment %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "userID": self.userID,
            "commentTXT": self.commentTXT,
            "commentLINK": self.commentLINK,
                        
            # do not serialize the password, its a security breach
        }
class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proposalID = db.Column(db.Integer, db.ForeignKey('proposal.id'), primary_key=True)
    userID = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    eventID = db.Column(db.Integer, db.ForeignKey('event.id'), primary_key=True)

    def __repr__(self):
        return '<Vote %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "proposalID": self.proposalID,
            "userID": self.userID,
            "eventID": self.eventID
           
                        
            # do not serialize the password, its a security breach
        }
class Proposal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proposalNAME = db.Column(db.String, primary_key=False)
    active = db.Column(db.Boolean, primary_key=False)
    winner = db.Column(db.Boolean, primary_key=False)
    eventID = db.Column(db.Integer, db.ForeignKey('event.id'), primary_key=False)

    def __repr__(self):
        return '<Proposal %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "proposalNAME": self.proposalNAME,
            "winner": self.winner,
            "active": self.active,
            "eventID": self.eventID,         
            # do not serialize the password, its a security breach
        }
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    eventNAME = db.Column(db.String, primary_key=False)
    
    def __repr__(self):
        return '<Event %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "eventNAME": self.proposalNAME,  
            # do not serialize the password, its a security breach
        }