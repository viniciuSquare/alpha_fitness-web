"use client";
import { useRoutineContext } from "@/context/routineContext";


import Link from "next/link";

import { RoutineCard } from "./components/RoutineCard";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Routines() {
  const { routines, feedRoutines } = useRoutineContext();
  
  if(!routines?.length) feedRoutines();
  // useEffect(()=> console.log(routines), [routines])
  return (
    <main className="flex-col max-w-screen">
      <div className="w-full py-4">
        <div>
          <Link href="/routines/create">
            <Button>Create Routine</Button>
          </Link>
        </div>
      </div>
      <div id="DailyRoutines" className="flex flex-wrap justify-center gap-2">
        {routines
          ? routines.map((routine) => <RoutineCard key={routine.id} routine={routine}/>)
          : null}
      </div>
    </main>
  );
}