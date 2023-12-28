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
  ) { }


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
  deleteWhenEnded: z.boolean().default(false).optional(),
  // users: z.object()
})