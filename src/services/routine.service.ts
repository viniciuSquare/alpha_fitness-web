import { User } from "@/models/user.model";
import { AxiosService } from "./axios.service";
import { Routine } from "@/models/routine.model";

export class RoutineService extends AxiosService {
  constructor() {
    super('routines');
  }

  async routines() {
    return await this.get()
      .then(({ data }) =>
        data.map((routine: Routine) => new Routine(routine.label, routine.startDate, routine.endDate, routine.deleteWhenEnded))
      )

    return ''
  }

  async getByUserId(userId: number) {
    const routines = this.get(`${userId.toString()}`)
      .then(({ data }) => {
        console.log(data)
        // return new User(data);
        return data
      });

    return routines;
  }

}