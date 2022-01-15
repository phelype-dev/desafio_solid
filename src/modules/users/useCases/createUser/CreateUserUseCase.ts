import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAllready = this.usersRepository.findById(email);
    if (userAllready) {
      throw new Error("email already exists");
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
