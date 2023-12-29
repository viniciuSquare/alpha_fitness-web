import { useState } from "react";
import { cn } from "@/lib/utils";

import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import Link from "next/link";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Routine } from "@/models/routine.model";

export function RoutineCard(props: { routine: Routine }) {
  const { routine } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{routine.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <DatePickerWithRange
          from={routine.startDate}
          to={routine.endDate}
        />
        {/* { routine.routineWorkouts?.map( routineWorkout => {
          return <>{routineWorkout}</>
        }) } */}
        <span className="text-muted-foreground">No workout on this routine</span>
        <Link href={`/routines/${routine.id}`}>
          <Button className="w-full" variant='outline'>See Details</Button>
        </Link>
      </CardContent>
    </Card>
  )
}


export function DatePickerWithRange(props: {
  className?: React.HTMLAttributes<HTMLDivElement>;
  from?: Date;
  to?: Date;
}) {
  const { className, from, to } = props;

  const [date, setDate] = useState<DateRange | undefined>({
    from: from ? from : new Date(),
    to: to ? to : addDays(new Date(), 20),
  });

  return (
    <div 
      className={cn(
        "flex items center w-[300px] justify-start text-left font-normal p-2 rounded-sm shadow-sm border",
        "bg-primary-foreground",
        className
      )}
    >
        <CalendarIcon className="mr-2 h-5 w-5" />
        {date?.from && date?.to && (
          <>
            {format(date.from, "LLL dd")} - {format(date.to, "LLL dd, y")}
          </>
        )}
    </div>
  );
}
