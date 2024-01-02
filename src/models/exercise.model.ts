import { formatTime } from "@/lib/timeFormatter";
import { z } from "zod";

export class Exercise {

  constructor(
    public name: string,
    public group: string,
    private rest: string,
    public series: string,
    public volume: string,
    public executionUnit: 'TIME' | 'REPETITION'
  ) {
  }

  get restTime() {
    return formatTime(this.rest);
  }

  static get formSchema() {
    return exerciseFormSchema;
  }
}

const exerciseFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Exercise name must be at least 2 characters.",
    })
    .max(30, {
      message: "Exercise name must not be longer than 30 characters.",
    }),
  rest: z.coerce.number(),
  volumeSugestion: z.string(),
  seriesSugestion: z.string(),
  // lastVolumeExecuted: z.number()
  executionUnit: z.enum(['TIME', 'REPETITION']),
  order: z.coerce.number(),
  // order: z.volume(),
  // order: z.series(),
  weightSugestion: z
    .preprocess((a) =>
      parseInt(z.string().parse(a), 10),
      z.number()
    ),
  muscleGroupId: z
    .preprocess((a) =>
      parseInt(z.string().parse(a), 10),
      z.number()
    )
})