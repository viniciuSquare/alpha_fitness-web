'use client'
import { Routine } from "@/models/routine.model";
import { RoutineService } from "@/services/routine.service";
import { createContext, useContext, useState } from "react";
interface RoutineContextProsp {
  routines: Routine[] | null,
  feedRoutines: () => void
}

const RoutineContext = createContext<RoutineContextProsp>({ 
  routines: null,
  feedRoutines: () => null
});

interface RoutineContextProviderProps {
  children: React.ReactNode;
}

export function RoutineContextProvider(props: RoutineContextProviderProps) {
  const { children } = props;
  const [ routines, setRoutines ] = useState<Routine[]>([])
  
  const service = new RoutineService();

  function feedRoutines() {
    service.routines().then(routines=> {
      console.log(routines)
      setRoutines(routines)
    })
  }

  return (
    <RoutineContext.Provider
      value={{
        routines,
        feedRoutines
      }}
    >
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutineContext() {
  return useContext(RoutineContext);
}
