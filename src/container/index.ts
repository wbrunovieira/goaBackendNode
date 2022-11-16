import { container } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepositories';
import { UsersRepository } from '../repositories/UsersRepositories';


container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
  );