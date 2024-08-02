import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    forwardRef(() => SharedModule),

    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),

    AuthModule,
    ProductModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
