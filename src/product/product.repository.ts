import { Inject, Injectable } from '@nestjs/common';
import { DbConnection } from 'src/shared/db/db.connection';
import { Prisma, Product, ProductsTypeEnum } from '@prisma/client';
import { ListProductsDto } from './dtos/list-products-input.dto';

@Injectable()
export class ProductRepository {
  @Inject(DbConnection)
  private readonly $db: DbConnection;

  public async findProductById(id: string): Promise<Product> {
    return this.$db.product.findUnique({
      where: {
        id,
      },
    });
  }

  public async listProducts(
    filters: Partial<Prisma.ProductWhereInput>,
  ): Promise<Product[]> {
    return this.$db.product.findMany({
      where: {
        ...filters,
      },
    });
  }

  public async createProduct(
    data: Prisma.ProductUncheckedCreateInput,
  ): Promise<Product> {
    return this.$db.product.create({
      data: { ...data },
    });
  }

  public async updateProduct(
    data: Partial<Prisma.ProductUncheckedUpdateInput>,
  ): Promise<Product> {
    return this.$db.product.update({
      where: {
        id: data.id as string,
      },
      data: { ...data },
    });
  }

  public async deleteProduct(id: string): Promise<Product> {
    return this.$db.product.delete({
      where: {
        id,
      },
    });
  }
}
