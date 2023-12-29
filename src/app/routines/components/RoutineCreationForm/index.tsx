"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import * as dayjs from "dayjs";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Routine } from "@/models/routine.model";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { RoutineService } from "@/services/routine.service";

type RoutineFormValues = z.infer<typeof Routine.formSchema>;
// DEFAULT ROUTINE PERIOD OF 3 MONTHS

const endDateFormatted = dayjs.default().add(3, "months").toDate();

// This can come from your database or API.
const initialValues: Partial<RoutineFormValues> = {
  startDate: dayjs.default().toDate(),
  endDate: endDateFormatted,
};

export function RoutineCreationForm(props: {
  defaultValues: Partial<RoutineFormValues>;
}) {
  const { defaultValues } = props;

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-6">
        <FormField
          control={form.control}
          name="label" // PARAM MUST MATCH FROM FORM SCHEMA
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Routine name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Routine Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                
                <FormControl> // VALUE WHEN NOT SELECTED
                  <SelectTrigger>
                    <SelectValue placeholder="Select the routine type.." />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="DAILY">Daily - Ex.: Monday, Tuesdays, Wed...</SelectItem>
                  <SelectItem value="ORDER">Order - Ex.: 1, 2, 3</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                  You can manage verified email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4">
          <Label className="w-full">Routine Period</Label>
          <div className="sm:flex sm:justify-between sm:gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Start date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date <= new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Date when the routine will be started
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>End date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date <= new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Date when the routine will be started
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="deleteWhenEnded"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Hide routine once finished</FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Separator />

        <Button type="submit">Update routine</Button>
      </form>
    </Form>
  );
}
