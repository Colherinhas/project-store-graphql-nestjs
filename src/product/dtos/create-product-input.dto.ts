import { Field, InputType } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateProductDto {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @Field(() => ProductsTypeEnum)
  @IsNotEmpty()
  @IsEnum(ProductsTypeEnum)
  type: ProductsTypeEnum;

  @Field(() => Boolean)
  @IsOptional()
  availability?: boolean;
}
