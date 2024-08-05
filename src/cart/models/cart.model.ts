import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from '@prisma/client';
import { ProductModel } from 'src/product/models/product.model';
import { UserResponseModel } from 'src/users/models/user-response.model';

@ObjectType()
export class CartResponseModel {
  @Field(() => ID)
  id: string;

  //   @Field(() => CartProductModel)
  //   products: CartProduct;

  //   @Field(() => UserResponseModel)
  //   owner: UserResponseModel;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, {
    nullable: true,
    description:
      'This field will only be available after the first record update',
  })
  updatedAt: Date | null;
}

@ObjectType()
class CartProductModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  cartId: string;

  @Field(() => String)
  productId: string;

  @Field(() => ProductModel)
  product: Product;
}
