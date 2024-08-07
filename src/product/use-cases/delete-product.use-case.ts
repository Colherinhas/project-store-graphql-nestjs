import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductModel } from '../models/product.model';

@Injectable()
export class DeleteProductUseCase {
  @Inject(ProductRepository)
  private readonly $product: ProductRepository;

  public async execute(id: string): Promise<ProductModel> {
    try {
      await this.validateProduct(id);
      return this.$product.deleteProduct(id);
    } catch (error) {
      throw Error(error.message);
    }
  }

  private async validateProduct(id: string): Promise<void> {
    const existingProduct = await this.$product.findProductById(id);
    if (!existingProduct) {
      throw new BadRequestException('Product not found.');
    }
  }
}
