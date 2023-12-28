"use client";

export function ExerciseCreationForm() {
  return <ExerciseForm></ExerciseForm>;
}

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
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
import { Textarea } from "@/components/ui/textarea";
import { Exercise } from "@/models/exercise.model";

type ExerciseFormValues = z.infer<typeof Exercise.formSchema>;

// This can come from your database or API.
const defaultValues: Partial<ExerciseFormValues> = {
  seriesSugestion: '3',
  volumeSugestion: '12',
};

export function ExerciseForm() {
  const form = useForm<ExerciseFormValues>({
    resolver: zodResolver(Exercise.formSchema),
    defaultValues,
    mode: "onChange",
  });

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  // })

  function onSubmit(data: ExerciseFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <div className="w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Exercise name" {...field} />
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
            name="executionUnit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Execução</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the execution type.." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="TIME">Timed Series</SelectItem>
                    <SelectItem value="REPETITION">By Repetitions</SelectItem>
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
          <FormField
            control={form.control}
            name="rest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rest Time</FormLabel>
                <FormControl>
                  <Input placeholder="Rest time" {...field} />
                </FormControl>
                <FormDescription>
                  Rest time between series executions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="volumeSugestion"
              render={({ field }) => (
                <FormItem className="w-full" >
                  <FormLabel>
                    {form.getValues().executionUnit == 'TIME' ? 'Execution Length' : 'Repetition' }
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder="Tell us a little bit about yourself"
                      // className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    You can <span>@mention</span> other users and organizations to
                    link to them.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seriesSugestion"
              render={({ field }) => (
                <FormItem className="w-full" >
                  <FormLabel>
                    {`${form.getValues().executionUnit == 'TIME' ? 'Execution Length' : 'Repetitions'} ` }
                    Series
                  </FormLabel>
                  <FormControl>
                    <Input
                      // placeholder="Tell us a little bit about yourself"
                      // className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    You can <span>@mention</span> other users and organizations to
                    link to them.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add links to your website, blog, or social media exercises.
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: "" })}
            >
              Add URL
            </Button>
          </div> */}
          <Button type="submit">Update exercise</Button>
        </form>
      </Form>
    </div>
  );
}
