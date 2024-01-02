"use client";

import * as dayjs from "dayjs";
import { Exercise } from "@/models/exercise.model";
import { Routine } from "@/models/routine.model";
import { ExerciseCard } from "../exercises/components/ExerciseCard";
import { RoutineCard } from "../routines/components/RoutineCard";
import { WorkoutCard } from "../workouts/components/WorkoutCard";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import Title from "@/components/ui/title";

export default function ComponentsPage() {
  return (
    <main className="flex-col w-full">
      <Title title="Components"/>

      <Tabs defaultValue="cards" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
        </TabsList>
        <TabsContent value="cards">
          <div className="flex flex-col gap-4">
            <RoutineCard
              routine={
                new Routine(
                  "Mock Train",
                  dayjs.default().toDate(),
                  dayjs.default().add(3, "months").toDate(),
                  false
                )
              }
            />
            <WorkoutCard
              label="Chest"
              lastExecutionDate="12/12"
              workoutUrl="/workout/1"
            />
            <ExerciseCard
              exercise={
                new Exercise(
                  "Supino Peito",
                  "Peito",
                  "90",
                  "4",
                  "12/10/8",
                  "REPETITION"
                )
              }
            />
          </div>
        </TabsContent>
        <TabsContent value="icons">
          <Icons.ChevronDown/>
          <Icons.Play/>
          <Icons.Menu/>
        </TabsContent>
      </Tabs>
    </main>
  );
}
