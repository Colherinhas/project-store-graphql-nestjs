import { forwardRef, Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ProductRepository } from './product.repository';
import { ProductResolver } from './product.resolver';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { ListProductsUseCase } from './use-cases/list-producs.use-case';

@Module({
  imports: [forwardRef(() => SharedModule)],
  providers: [
    ProductResolver,

    ProductRepository,

    CreateProductUseCase,
    ListProductsUseCase,
  ],
  exports: [ProductRepository],
})
export class ProductModule {}
