import { forwardRef, Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ProductRepository } from './product.repository';
import { ProductResolver } from './product.resolver';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { ListProductsUseCase } from './use-cases/list-producs.use-case';
import { DeleteProductUseCase } from './use-cases/delete-product.use-case';
import { FindProductByIdUseCase } from './use-cases/find-product-by.use-case';

@Module({
  imports: [forwardRef(() => SharedModule)],
  providers: [
    ProductResolver,

    ProductRepository,

    FindProductByIdUseCase,
    CreateProductUseCase,
    ListProductsUseCase,
    DeleteProductUseCase,
  ],
  exports: [ProductRepository],
})
export class ProductModule {}
