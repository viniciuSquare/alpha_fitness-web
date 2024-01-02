'use client'
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Exercise } from "@/models/exercise.model";

interface ExerciseCardProps {
  name: string;
  group: string;
  rest: number;
  series: string;
  volume: string;
  executionUnit: "TIME" | "REPETITION";
}

export function ExerciseCard(
  props: { exercise: Exercise } // | ExerciseCardProps
) {
  const { exercise } = props;

  return (
    <Card id="exercise">
      <CardContent className="flex w-full gap-4 p-6 bg-opacity-60 rounded-lg items-center">
        <img src="images/exercises/supino.png"></img>
        <div className="w-full flex flex-col justify-between">
          <span className="text-lg font-bold text-primary">
            {exercise.name}
          </span>
          <ExerciseCardDescription label='Descanso' value={exercise.restTime} />
          <ExerciseCardDescription label='series' value={exercise.series} />
          <ExerciseCardDescription label={exercise.executionUnit} value={exercise.volume} />
        </div>
        <Button className="py-4 px-2" variant="ghost">
          <Icons.Play />
        </Button>
      </CardContent>
    </Card>
  );
}

function ExerciseCardDescription(props: {
  label: string,
  value: string
}) {
  const { label, value } = props;
  return (
    <div 
      className="flex justify-between
        opacity-60 hover:opacity-100"
    >
      <span className="font-bold text-primary">
        { capitalize(label) }
      </span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
}
