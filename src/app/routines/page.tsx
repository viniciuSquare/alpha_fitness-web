"use client";
import { useRoutineContext } from "@/context/routineContext";


import Link from "next/link";

import { RoutineCard } from "./components/RoutineCard";
import { Button } from "@/components/ui/button";

export default function Routines() {
  const { routines } = useRoutineContext();

  return (
    <main className="flex-col max-w-screen">
      <div className="w-full py-4">
        <div>
          <Link href="/routines/create">
            <Button>Create Routine</Button>
          </Link>
        </div>
      </div>
      <div id="DailyRoutines" className="flex flex-wrap gap-2">
        {routines
          ? routines.map((routine) => <RoutineCard routine={routine}/>)
          : null}
      </div>
    </main>
  );
}