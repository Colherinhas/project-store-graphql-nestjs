import { Field, Float, ID, InputType } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateProductDto {
  @Field(() => ID)
  @IsNotEmpty({ message: 'Id must not be empty' })
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  name: string;

  @Field(() => [ProductsTypeEnum], { nullable: true })
  @IsOptional()
  categories: ProductsTypeEnum[];

  @Field(() => Number, { nullable: true })
  @IsOptional()
  stock: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  price: number;
}
