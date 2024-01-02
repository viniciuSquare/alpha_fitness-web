import { User } from "@/models/user.model";
import { AxiosService } from "./axios.service";
import { Workout } from "@/models/workout.model";

export class WorkoutService extends AxiosService {
  constructor() {
    super('workouts');
  }

  async workouts(): Promise<Workout[]> {
    return await this.get()
      .then(({ data }) =>{
        console.log(data)
        if(!data.length) return []
        return data.map((workoutData: Workout) => {
          const workout = new Workout(workoutData.label);
          if(workoutData.id) workout.id = workoutData.id
          if(workoutData.exercises) workout.exercises = workoutData.exercises
          
          return workout;
        })
      })
  }

  async getById( workoutId: number ) {
    return await this.get(`by-id/${workoutId}`).then(data=> {
      // console.log(data)

      return data;
    })
  }

  async getByRoutineId(routineId: number) {
    const workouts = this.get(`${routineId.toString()}`)
      .then(({ data }) => {
        console.log(data)
        return data
      });

    return workouts;
  }

  async create(workout: Workout) {
    console.log(workout.http)
    return await this.post(workout.http);
  }  
}