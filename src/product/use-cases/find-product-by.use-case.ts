import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductModel } from '../models/product.model';

@Injectable()
export class FindProductByIdUseCase {
  @Inject(ProductRepository)
  private readonly $product: ProductRepository;

  public async execute(id: string): Promise<ProductModel> {
    try {
      const product = await this.$product.findProductById(id);
      if (!product) {
        throw new BadRequestException('Product not found.');
      }
      return product;
    } catch (error) {
      throw Error(error.message);
    }
  }
}
