import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtGuard } from 'src/shared/guards/jwt-auth.guard';
import { CartResponseModel } from './models/cart.model';
import { CreateCartDto } from './dtos/create-cart-input.dto';
import { CartRepository } from './cart.repository';

@Resolver()
export class CartResolver {
  @Inject(CartRepository)
  private readonly $cart: CartRepository;

  //   @UseGuards(JwtGuard)
  //   @Query(() => [CartResponseModel], { name: 'listCarts' })
  //   public async listCarts(
  //     @Args('filters', { type: () => ListCartsDto })
  //     filters: CreateCartDto,
  //   ): Promise<CartResponseModel[]> {
  //     return this.$cart.listUserCarts(filters);
  //   }

  @UseGuards(JwtGuard)
  @Mutation(() => CartResponseModel, { name: 'createCart' })
  public async createCart(
    @Args('data', { type: () => CreateCartDto })
    data: CreateCartDto,
  ): Promise<CartResponseModel> {
    return this.$cart.createCart(data);
  }
}
