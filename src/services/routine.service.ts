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
        data.map((routineData: Routine) => {
          const routine = new Routine(routineData.label, routineData.startDate, routineData.endDate, routineData.deleteWhenEnded);
          if(routineData.id) routine.id = routineData.id
          if(routineData.users) routine.users = routineData.users
          if(routineData.routineWorkouts) routine.routineWorkouts = routineData.routineWorkouts
          
          return routine;
        })
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

  async create(routine: Routine) {
    return await this.post(routine.http);
  }

  async setRoutineToUsed(routineId: number, userId: number) {
    return await this.post({routineId, userId}, 'set-to-user');
  }
}