import Title from "@/components/ui/title";
import { RoutineCreationForm } from "../components/RoutineCreationForm";

export default function CreateRoutinePage() {
  return(
    <main className="flex-col">
      <Title title="Create Routine" />
      <RoutineCreationForm/>
    </main>
  )
}