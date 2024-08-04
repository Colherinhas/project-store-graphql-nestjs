import { Field, Float, InputType } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateProductDto {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @Field(() => [ProductsTypeEnum])
  @IsNotEmpty()
  categories: ProductsTypeEnum[];

  @Field(() => Number)
  @IsNotEmpty()
  stock: number;

  @Field(() => Float)
  @IsNotEmpty()
  @MinLength(0)
  price: number;
}
