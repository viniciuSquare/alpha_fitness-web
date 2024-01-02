import { DateWithRange } from "@/components/DateWithRange";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Routine } from "@/models/routine.model";
import { RoutineService } from "@/services/routine.service";
import Link from "next/link";

export async function generateMetadata({params}: { params: { id: string }}) {
  const { data } = await new RoutineService().get(params.id)
  const routine = Routine.constructFromResponse(data);
	return {
		title: `${routine.label}`
	}
}


export default async function RoutinePage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data } = await new RoutineService().get(id)
  
  await setInterval(()=> {} ,3000);

  const routine = Routine.constructFromResponse(data);


  if (!routine) return <>Loading...</>;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{routine.label}</CardTitle>
          <DateWithRange
            from={routine.startDate}
            to={routine.endDate}
            className="p-2 opacity-70 hover:opacity-100"
          />
        </div>
        
      </CardHeader>
      <CardContent>
        <Link href={`/routines/${routine.id}/edit`}>
          <Button className="w-full" variant="outline">
            See Details
          </Button>
        </Link>
        {/* { routine.routineWorkouts?.map( routineWorkout => {
            return <>{routineWorkout}</>
          }) } */}
        <div className="my-2">
          {routine.routineWorkouts ? (
            <>Routine Workouts</>
          ) : (
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">
                No workout on this routine
              </span>
              <Button variant="ghost" >Add Workouts</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// function RoutineWorkoutsDetails(props: { routineWorkouts: RoutineWorkout[] }) {

// }
