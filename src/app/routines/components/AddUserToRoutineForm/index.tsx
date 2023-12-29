import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useRoutineContext } from "@/context/routineContext";
import { useUserContext } from "@/context/userContext";
import { useState } from "react";

export function AddUserToRoutineForm() {
  const { routines } = useRoutineContext();
  // const { user } = useUserContext();
  // TODO - List users and select to relate to Routine
  return (
    <div>
      <Select
          // onValueChange={updateDefaultRoutinesByRoutineId} defaultValue={field.value}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select the execution type.." />
          </SelectTrigger>
          <SelectContent>
            {routines
              ? routines.map((routine) => {
                  return (
                    <SelectItem value={routine.id!.toString()}>
                      {routine.label}
                    </SelectItem>
                  );
                })
              : null}
            <SelectItem value="{routine.label}">routine.label</SelectItem>
            <SelectItem value="{teste}">teste</SelectItem>
            <SelectItem value="REPETITION">By Repetitions</SelectItem>
          </SelectContent>
        </Select>
    </div>
  )
}