import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';

@ObjectType()
export class ProductModel {
  @Field(() => ID)
  id: string;

  @Field(() => [ProductsTypeEnum])
  categories: ProductsTypeEnum[];

  @Field(() => String)
  name: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Number)
  price: number;
}
