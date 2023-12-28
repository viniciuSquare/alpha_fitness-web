'use client'
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Routine } from "@/models/routine.model";
import { RoutineService } from "@/services/routine.service";

export default function Routines() {
  const [ routines, setRoutines ] = useState<Routine[]>()

  useEffect(()=>{
    const service = new RoutineService();
    service.routines().then(routines=> setRoutines(routines))
    
  }, [])

  return (
    <main className="flex-col">
      <div className="w-full py-4">
        <div>
          <Link href="/routines/create">
            <Button>Create Routine</Button>
          </Link>
        </div>
      </div>
      <div id="DailyRoutines" className="flex">
        

      </div>
    </main>
  );
}
