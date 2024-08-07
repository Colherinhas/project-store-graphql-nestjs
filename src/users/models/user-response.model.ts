import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Cart, Product, UserStatusEnum } from '@prisma/client';
import { ProductModel } from 'src/product/models/product.model';

@ObjectType()
export class UserResponseModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => UserStatusEnum)
  status: UserStatusEnum;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, {
    nullable: true,
    description:
      'This field will only be available after the first record update',
  })
  updatedAt: Date | null;

  @Field(() => Date, {
    nullable: true,
  })
  deletedAt: Date | null;

  @Field(() => UserCartResponseModel, {
    nullable: true,
  })
  cart?: Cart;
}

@ObjectType()
class UserCartResponseModel {
  @Field(() => ID)
  id: string;

  @Field(() => ProductModel)
  products: Product[];

  @Field(() => UserResponseModel)
  owner: UserResponseModel;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, {
    nullable: true,
    description:
      'This field will only be available after the first record update',
  })
  updatedAt: Date | null;
}
