import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { UpdateProductDto } from '../dtos/update-product-input.dto';
import { ProductModel } from '../models/product.model';

@Injectable()
export class UpdateProductUseCase {
  @Inject(ProductRepository)
  private readonly $product: ProductRepository;

  public async execute(data: UpdateProductDto): Promise<ProductModel> {
    try {
      await this.validateProduct(data.id);
      return this.$product.updateProduct(data);
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
