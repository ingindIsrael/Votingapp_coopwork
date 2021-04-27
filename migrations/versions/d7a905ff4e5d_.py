"""empty message

Revision ID: d7a905ff4e5d
Revises: 
Create Date: 2021-04-19 22:40:04.056214

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd7a905ff4e5d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('fname', sa.String(length=80), nullable=False),
    sa.Column('lname', sa.String(length=80), nullable=False),
    sa.Column('workerPosition', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userID', sa.Integer(), nullable=False),
    sa.Column('commentTXT', sa.String(length=80), nullable=False),
    sa.Column('commentLINK', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['userID'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('vote',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('proposalID', sa.Integer(), nullable=False),
    sa.Column('proposalNAME', sa.String(length=80), nullable=False),
    sa.Column('winner', sa.Boolean(), nullable=False),
    sa.Column('votesCOUNT', sa.Integer(), nullable=False),
    sa.Column('usersIDs', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['usersIDs'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('vote')
    op.drop_table('comment')
    op.drop_table('user')
    # ### end Alembic commands ###