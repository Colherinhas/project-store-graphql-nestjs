import { Inject, Injectable } from '@nestjs/common';
import { DbConnection } from 'src/shared/db/db.connection';
import { ProductModel } from './models/product.model';
import { CreateProductDto } from './dtos/create-product-input.dto';
import { Prisma, Product } from '@prisma/client';
import { ListProductsDto } from './dtos/list-products-input.dto';

@Injectable()
export class ProductRepository {
  @Inject(DbConnection)
  private readonly $db: DbConnection;

  //   public async findProductById(): Promise<> {
  //     return;
  //   }

  public async listProducts(
    filters: Partial<Prisma.ProductWhereInput>,
  ): Promise<ProductModel[]> {
    return this.$db.product.findMany({
      where: { ...filters },
    });
  }

  public async createProduct(
    data: Prisma.ProductUncheckedCreateInput,
  ): Promise<Product> {
    return this.$db.product.create({
      data: { ...data },
    });
  }

  //   public async updateProduct(): Promise<> {
  //     return;
  //   }

  //   public async deleteProduct(): Promise<> {
  //     return;
  //   }
}
