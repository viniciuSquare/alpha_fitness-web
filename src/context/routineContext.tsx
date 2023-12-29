import { Routine } from "@/models/routine.model";
import { RoutineService } from "@/services/routine.service";
import { createContext, useContext, useEffect, useState } from "react";

const RoutineContext = createContext<{ routines: Routine[] | null }>({ routines: null });

interface RoutineContextProviderProps {
  children: React.ReactNode;
}

export function RoutineContextProvider(props: RoutineContextProviderProps) {
  const { children } = props;
  const [ routines, setRoutines ] = useState<Routine[]>([])

  useEffect(()=>{
    const service = new RoutineService();
    service.routines().then(routines=> {
      console.log(routines)
      setRoutines(routines)
    })
    
  }, [])

  return (
    <RoutineContext.Provider
      value={{
        routines
      }}
    >
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutineContext() {
  return useContext(RoutineContext);
}
