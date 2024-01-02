import { z } from "zod";
import { Exercise } from "./exercise.model";

export class Workout {
  public id?: number;

  constructor(
    public label: string,
    public exercises?: Exercise[]
  ) {
  }

  get http() {
    return {
      label: this.label
    }
  }

  static get formSchema() {
    return workoutFormSchema;
  }
}

const workoutFormSchema = z.object({
  label: z
    .string(),

})