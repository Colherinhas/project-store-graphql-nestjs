import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { CreateUserDto } from '../dtos/create-user.dto';
import { HashHelper } from 'src/shared/helpers/hash.helper';
import { UserResponseModel } from '../models/user-response.model';

@Injectable()
export class CreateUserUseCase {
  @Inject(UserRepository)
  private readonly $user: UserRepository;
  @Inject(HashHelper)
  private readonly $hash: HashHelper;

  public async execute(data: CreateUserDto): Promise<UserResponseModel> {
    try {
      data.password = await this.validatePassword(data.password);
      if (!data.password)
        throw new Error('Error while generating password hash');
      return this.$user.createUser(data);
    } catch (err) {
      throw Error(err.message);
    }
  }

  private async validatePassword(password: string): Promise<string | null> {
    const hashedPassword = await this.$hash.hashPassword(password);
    if (!hashedPassword) return null;
    return hashedPassword;
  }
}
