import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductModel } from '../models/product.model';

@Injectable()
export class DeleteProductUseCase {
  @Inject(ProductRepository)
  private readonly $product: ProductRepository;

  public async execute(id: string): Promise<ProductModel> {
    try {
      const product = await this.$product.findProductById(id);
      if (!product) {
        throw new BadRequestException('Product not found or already deleted');
      }
      return this.$product.deleteProduct(id);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
