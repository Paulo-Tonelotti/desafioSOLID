import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error(`User ${user_id} does not exist`);
    } else if (user.admin === false) {
      throw new Error(`User ${user.name} is not an admin`);
    }

    const listAllUsers = this.usersRepository.list();
    return listAllUsers;
  }
}

export { ListAllUsersUseCase };
