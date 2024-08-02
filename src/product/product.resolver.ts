import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { ProductModel } from './models/product.model';
import { CreateProductDto } from './dtos/create-product-input.dto';

@Resolver()
export class ProductResolver {
  @Inject(CreateProductUseCase)
  private readonly $create: CreateProductUseCase;

  @Mutation(() => ProductModel, { name: 'createProduct' })
  public async createProduct(
    @Args('data', {
      type: () => CreateProductDto,
    })
    data: CreateProductDto,
  ): Promise<ProductModel> {
    return this.$create.execute(data);
  }
}
