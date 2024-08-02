import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ListProductsDto } from '../dtos/list-products-input.dto';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ListProductsUseCase {
  @Inject(ProductRepository)
  private readonly $products: ProductRepository;

  public async execute(filters: ListProductsDto): Promise<ProductModel[]> {
    try {
      return this.$products.listProducts(filters);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
