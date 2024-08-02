import { forwardRef, Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ProductRepository } from './product.repository';
import { ProductResolver } from './product.resolver';
import { CreateProductUseCase } from './use-cases/create-product.use-case';

@Module({
  imports: [forwardRef(() => SharedModule)],
  providers: [ProductResolver, ProductRepository, CreateProductUseCase],
  exports: [ProductRepository],
})
export class ProductModule {}
