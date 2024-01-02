import { toast } from "@/components/ui/use-toast";
import { Routine } from "@/models/routine.model";
import { RoutineService } from "@/services/routine.service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as dayjs from "dayjs";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";

export type RoutineFormValues = z.infer<typeof Routine.formSchema>;

// DEFAULT ROUTINE PERIOD OF 3 MONTHS
const endDateFormatted = dayjs.default().add(3, "months").toDate();

// This can come from your database or API.
export const initialValues: Partial<RoutineFormValues> = {
  startDate: dayjs.default().toDate(),
  endDate: endDateFormatted,
};

export function RoutineFormHooks(defaultValues: Partial<RoutineFormValues>) {
  const form = useForm<RoutineFormValues>({
    resolver: zodResolver(Routine.formSchema),
    defaultValues: defaultValues ? defaultValues : initialValues,
    mode: "onChange",
  });

  function onSubmit(routineFormValues: RoutineFormValues) {
    const routine = new Routine(
      routineFormValues.label,
      routineFormValues.startDate,
      routineFormValues.endDate,
      routineFormValues.deleteWhenEnded
    );

    new RoutineService().create(routine).then((data) => {
      console.log(data);
      toast({
        title: "Routine to be created",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>{" "}
          </pre>
        ),
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
        duration: 5000,
      });
    });
  }
  return {
    form,
    onSubmit
  };
}
