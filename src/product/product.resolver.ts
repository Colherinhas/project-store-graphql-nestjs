import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { ProductModel } from './models/product.model';
import { CreateProductDto } from './dtos/create-product-input.dto';
import { JwtGuard } from 'src/shared/guards/jwt-auth.guard';
import { ListProductsUseCase } from './use-cases/list-producs.use-case';
import { ListProductsDto } from './dtos/list-products-input.dto';

@Resolver()
export class ProductResolver {
  @Inject(CreateProductUseCase)
  private readonly $create: CreateProductUseCase;
  @Inject(ListProductsUseCase)
  private readonly $list: ListProductsUseCase;

  @UseGuards(JwtGuard)
  @Query(() => [ProductModel], { name: 'listProducts' })
  public async listProducts(
    @Args('filters', { type: () => ListProductsDto })
    filters: ListProductsDto,
  ): Promise<ProductModel[]> {
    return this.$list.execute(filters);
  }

  @UseGuards(JwtGuard)
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
