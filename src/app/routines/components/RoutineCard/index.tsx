import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Routine } from "@/models/routine.model";
import { DateWithRange } from "@/components/DateWithRange";
import { Icons } from "@/components/icons";

export function RoutineCard(props: { routine: Routine }) {
  const { routine } = props;
  
  return (
    <Card className="min-w-[320px]">
      <CardHeader>
        <div className="flex justify-between items-center gap-4">
          <CardTitle className="text-2xl font-bold py-4 text-primary">
            {routine.label}
          </CardTitle>
          <Button variant="ghost" className="p-0 opacity-75 hover:opacity-100">
            <Icons.Menu />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <DateWithRange
          from={routine.startDate}
          to={routine.endDate}
          className="p-2 rounded-sm shadow-sm border bg-primary-foreground"
        />
        {/* { routine.routineWorkouts?.map( routineWorkout => {
          return <>{routineWorkout}</>
        }) } */}
        <div className="my-2">
          {routine.routineWorkouts ? (
            <>Routine Workouts</>
          ) : (
            <span className="text-muted-foreground">
              No workout on this routine
            </span>
          )}
        </div>
        <Link href={`/routines/${routine.id}`}>
          <Button className="w-full" variant="outline">
            See Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
