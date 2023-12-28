import { z } from "zod";

export class Exercise {

  constructor(
    public name: string,
    public group: string,
    public rest: string,
    public series: string,
    public volume: string,
    public executionUnit: 'TIME' | 'REPETITION'
  ) {
  }

  get restTime() {
    return this.formatTime(this.rest);
  }

  private formatTime(time: string) {
    let formattedTime: string;

    if (time.includes(":")) {
      formattedTime = `${time
        .substring(0, time.indexOf(":") + 1)
        .padEnd(2, "0")}${time
          .substring(time.indexOf(":") + 1)
          .padEnd(2, "0")}`;
    } else {
      formattedTime = `${time}:00`;
    }

    return formattedTime;
  }

  static get formSchema() {
    return exerciseFormSchema;
  }
}

const exerciseFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  rest: z
    .preprocess((a) =>
      parseInt(z.string().parse(a), 10),
      z.number()
    ),
  volumeSugestion: z.string(),
  seriesSugestion: z.string(),
  // lastVolumeExecuted: z.number()
  executionUnit: z.string(),
  order: z
    .preprocess((a) =>
      parseInt(z.string().parse(a), 10),
      z.number()
    ),
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