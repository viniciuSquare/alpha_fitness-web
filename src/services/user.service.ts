import { User } from "@/models/user.model";
import { AxiosService } from "./axios.service";

export class UserService extends AxiosService {
  constructor() {
    super('user');
  }

  async getUserById(id: number) {
    const user = this.get(id.toString())
      .then(({data}) => {
        console.log(data)
        // return new User(data);
        return data
      });

    return user;
  }

}