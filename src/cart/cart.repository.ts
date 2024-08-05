import { Inject, Injectable } from '@nestjs/common';
import { Cart, Prisma } from '@prisma/client';
import { DbConnection } from 'src/shared/db/db.connection';

@Injectable()
export class CartRepository {
  @Inject(DbConnection)
  private readonly $db: DbConnection;

  public async listUserCarts(ownerId: string): Promise<Cart[]> {
    return this.$db.cart.findMany({
      where: {
        ownerId,
      },
    });
  }

  public async createCart(
    data: Prisma.CartUncheckedCreateInput,
  ): Promise<Cart> {
    return this.$db.cart.create({
      data: {
        ownerId: data.ownerId,
      },
    });
  }
}
