import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Routine } from "@/models/routine.model";
import { RoutineService } from "@/services/routine.service";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function RoutineSelector(props: {handleSelection: (routine: Routine)=> void, className? :string}) {
  const { handleSelection, className } = props;

  const [routines, setRoutines] = useState<Routine[]>([]);
  
  const [ isSelectVisible, setSelectVisibility ] = useState(false);
  const toggleSelectVisibility = ( ) => setSelectVisibility(!isSelectVisible);

  useEffect(() => {
    new RoutineService().routines().then((routines) => setRoutines(routines));
  }, []);

  function updateDefaultRoutinesByRoutineId(selectedRoutineId: string) {
    const formatSelectedRoutineId = Number(selectedRoutineId);
    console.log(formatSelectedRoutineId);

    if (isNaN(formatSelectedRoutineId)) {
      console.error("formatSelectedRoutineId is NaN");
    }

    const deafultValues = findRoutineById(formatSelectedRoutineId);
    
    if(!deafultValues) return // TODO - Handle exception

    handleSelection(deafultValues);
  }

  function findRoutineById(routineId: number) {
    return routines.find((routine) => routine.id == routineId);
  }
  if(!routines) return 

  return (
    <div className={cn(className, "py-4")} onClick={toggleSelectVisibility}>
      <div className="flex items-center justify-between">
        <Label>Copy from another routine...</Label>
        <Button
          variant='ghost'
        >
          { isSelectVisible ? <ChevronUp/> : <ChevronDown /> }
        </Button>
      </div>
      { isSelectVisible ?
        <Select
          onValueChange={updateDefaultRoutinesByRoutineId} // defaultValue={field.value}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select the execution type.." />
          </SelectTrigger>
          <SelectContent>
            {routines
              ? routines.map((routine, index) => {
                  return (
                    <SelectItem value={routine.id!.toString()} key={index}>
                      {routine.label}
                    </SelectItem>
                  );
                })
              : null}
          </SelectContent>
        </Select>
        : null
      }
    </div>
  );
}