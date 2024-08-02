import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { CreateProductDto } from '../dtos/create-product-input.dto';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CreateProductUseCase {
  @Inject(ProductRepository)
  private readonly $product: ProductRepository;

  public async execute(data: CreateProductDto): Promise<ProductModel> {
    try {
      return this.$product.createProduct(data);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
