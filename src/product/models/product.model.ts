import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';

@ObjectType()
export class ProductModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => ProductsTypeEnum)
  type: ProductsTypeEnum;

  @Field(() => Boolean)
  availability: Boolean;
}
