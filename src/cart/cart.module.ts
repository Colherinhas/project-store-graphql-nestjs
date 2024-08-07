import { forwardRef, Module } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { SharedModule } from 'src/shared/shared.module';
import { CartResolver } from './cart.resolver';

@Module({
  imports: [forwardRef(() => SharedModule)],
  providers: [CartRepository, CartResolver],
  exports: [CartRepository],
})
export class CartsModule {}
