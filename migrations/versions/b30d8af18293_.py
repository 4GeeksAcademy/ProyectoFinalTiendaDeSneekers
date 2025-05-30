"""empty message

Revision ID: b30d8af18293
Revises: 4f1cace7972f
Create Date: 2025-05-26 14:07:04.526791

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b30d8af18293'
down_revision = '4f1cace7972f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('carritozapatilla',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('carrito_id', sa.Integer(), nullable=False),
    sa.Column('zapatilla_id', sa.Integer(), nullable=False),
    sa.Column('talla', sa.Integer(), nullable=False),
    sa.Column('cantidad', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['carrito_id'], ['carrito.id'], ),
    sa.ForeignKeyConstraint(['zapatilla_id'], ['zapatilla.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('carrito_zapatilla')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('carrito_zapatilla',
    sa.Column('talla', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('cantidad', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('zapatilla_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('carrito_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['carrito_id'], ['carrito.id'], name='carrito_zapatilla_carrito_id_fkey'),
    sa.ForeignKeyConstraint(['zapatilla_id'], ['zapatilla.id'], name='carrito_zapatilla_zapatilla_id_fkey'),
    sa.PrimaryKeyConstraint('zapatilla_id', 'carrito_id', name='carrito_zapatilla_pkey')
    )
    op.drop_table('carritozapatilla')
    # ### end Alembic commands ###
