import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCartDto {
  @Field(() => String)
  ownerId: string;
}
