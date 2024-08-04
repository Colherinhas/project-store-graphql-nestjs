import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';
import { IsOptional } from 'class-validator';

@InputType()
export class ListProductsDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  id?: string;

  @Field(() => [ProductsTypeEnum], { nullable: true })
  categories?: ProductsTypeEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  name?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  stock?: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  price?: number;
}
