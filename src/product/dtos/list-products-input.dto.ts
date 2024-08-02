import { Field, InputType } from '@nestjs/graphql';
import { ProductsTypeEnum } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

@InputType()
export class ListProductsDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  id?: string;

  @Field(() => ProductsTypeEnum, { nullable: true })
  @IsEnum(ProductsTypeEnum)
  @IsOptional()
  type?: ProductsTypeEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  name?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  availability?: boolean;
}
