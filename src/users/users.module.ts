import { forwardRef, Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { UserRepository } from './users.repository';
import { UserResolver } from './users.resolver';
import { ListUsersUseCase } from './use-cases/list-users.use-case';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UpdateUserUseCase } from './use-cases/update-user.use-case';
import { FindUserByIdUseCase } from './use-cases/find-user-by-id.use-case';
import { SoftDeleteUserUseCase } from './use-cases/soft-delete-user.use-case';

@Module({
  imports: [forwardRef(() => SharedModule)],
  providers: [
    UserRepository,

    UserResolver,

    FindUserByIdUseCase,
    ListUsersUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    SoftDeleteUserUseCase,
  ],
  exports: [UserRepository],
})
export class UserModule {}
