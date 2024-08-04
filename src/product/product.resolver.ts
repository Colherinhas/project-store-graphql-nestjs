import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { ProductModel } from './models/product.model';
import { CreateProductDto } from './dtos/create-product-input.dto';
import { JwtGuard } from 'src/shared/guards/jwt-auth.guard';
import { ListProductsUseCase } from './use-cases/list-producs.use-case';
import { ListProductsDto } from './dtos/list-products-input.dto';
import { ProductRepository } from './product.repository';
import { DeleteProductUseCase } from './use-cases/delete-product.use-case';
import { FindProductByIdUseCase } from './use-cases/find-product-by.use-case';

@Resolver()
export class ProductResolver {
  @Inject(FindProductByIdUseCase)
  private readonly $find: FindProductByIdUseCase;
  @Inject(ListProductsUseCase)
  private readonly $list: ListProductsUseCase;
  @Inject(CreateProductUseCase)
  private readonly $create: CreateProductUseCase;
  @Inject(DeleteProductUseCase)
  private readonly $delete: DeleteProductUseCase;

  @UseGuards(JwtGuard)
  @Query(() => ProductModel, { name: 'findProduct' })
  public async findProductById(
    @Args('id', { type: () => String })
    id: string,
  ): Promise<ProductModel> {
    return this.$find.execute(id);
  }

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

  @UseGuards(JwtGuard)
  @Mutation(() => ProductModel, { name: 'deleteProduct' })
  public async deleteProduct(
    @Args('id', {
      type: () => String,
    })
    id: string,
  ): Promise<ProductModel> {
    return this.$delete.execute(id);
  }
}
