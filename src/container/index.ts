import { container } from 'tsyringe';

import '../container/providers'

import { IUsersRepository } from '../repositories/IUsersRepositories';
import { UsersRepository } from '../repositories/UsersRepositories';

import { IUsersTokensRepository } from "../repositories/IUsersTokensRepositories";
import { UsersTokensRepository } from "../repositories/UsersTokensRepositories";


container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
  );

  container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
  );