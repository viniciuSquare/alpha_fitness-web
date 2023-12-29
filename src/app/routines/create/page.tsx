"use client";

import { useEffect, useState } from "react";

import { RoutineCreationForm } from "../components/RoutineCreationForm";

import Title from "@/components/ui/title";

import { Routine } from "@/models/routine.model";
import { AddUserToRoutineForm } from "../components/AddUserToRoutineForm";
import { Separator } from "@/components/ui/separator";
import { RoutineSelector } from "../components/RoutineSelector";

export default function CreateRoutinePage() {
  const [defaultRoutine, setDefaultRoutines] = useState<Routine>();

  useEffect(() => {
    console.log("updated default routine", defaultRoutine);
  }, [defaultRoutine]);

  return (
    <main className="flex-col">
      <Title title="Create Routine" />

      <RoutineSelector handleSelection={setDefaultRoutines}/>
      <Separator />
      <RoutineCreationForm defaultValues={defaultRoutine!} />
      <Separator />
      {/* <AddUserToRoutineForm /> */}
    </main>
  );
}
