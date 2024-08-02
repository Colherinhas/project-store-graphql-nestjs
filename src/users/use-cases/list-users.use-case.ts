import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { ListUsersFilterDto } from '../dtos/list-users-filters.dto';
import { UserResponseModel } from '../models/user-response.model';

@Injectable()
export class ListUsersUseCase {
  @Inject(UserRepository)
  private readonly $user: UserRepository;

  public async execute(
    filters?: ListUsersFilterDto,
  ): Promise<UserResponseModel[]> {
    try {
      return this.$user.findUsers(filters);
    } catch (err) {
      throw Error(err.message);
    }
  }
}
