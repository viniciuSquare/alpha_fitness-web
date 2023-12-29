import { z } from "zod";
import { User } from "./user.model";

export class Routine {

  constructor(
    public label: string,
    public startDate: Date,
    public endDate: Date,
    public deleteWhenEnded: boolean,
    public routineWorkouts?: {}[],
    public users?: User[],
    public id?: number,
  ) { }

  get http() {
    return {
      id: this.id,
      label: this.label,
      startDate: this.startDate,
      endDate: this.endDate,
      deleteWhenEnded: this.deleteWhenEnded,
      routineWorkouts: this.routineWorkouts,
      users: this.users,
    }
  }

  static get formSchema() {
    return routineFormSchema;
  }
}

const routineFormSchema = z.object({
  label: z
    .string()
    .min(2, {
      message: "Routine label must be at least 2 characters.",
    }),
  startDate: z.date(),
  endDate: z.date(),
  deleteWhenEnded: z.boolean().default(true),
  type: z.enum(["DAILY","ORDER" ])

  // users: z.object()
})