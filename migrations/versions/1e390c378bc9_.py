"""empty message

Revision ID: 1e390c378bc9
Revises: 
Create Date: 2025-05-16 00:45:51.505094

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e390c378bc9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('marca',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('modelo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('marca_id', sa.Integer(), nullable=False),
    sa.Column('precio', sa.Integer(), nullable=False),
    sa.Column('oferta', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['marca_id'], ['marca.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('zapatilla',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('modelo_id', sa.Integer(), nullable=False),
    sa.Column('marca_id', sa.Integer(), nullable=False),
    sa.Column('tallas', sa.ARRAY(sa.Integer()), nullable=False),
    sa.ForeignKeyConstraint(['marca_id'], ['marca.id'], ),
    sa.ForeignKeyConstraint(['modelo_id'], ['modelo.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('carrito',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.Column('zapatilla_id', sa.Integer(), nullable=False),
    sa.Column('talla', sa.Integer(), nullable=False),
    sa.Column('cantidad', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['usuario_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['zapatilla_id'], ['zapatilla.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('carrito')
    op.drop_table('zapatilla')
    op.drop_table('modelo')
    op.drop_table('user')
    op.drop_table('marca')
    # ### end Alembic commands ###
