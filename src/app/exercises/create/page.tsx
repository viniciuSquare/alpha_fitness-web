import SettingsProfilePage from "@/components/forms/page";
import { ExerciseCreationForm } from "../components/ExerciseCreationForm";
import Title from "@/components/ui/title";

export default function CreateExercisePage() {
  return(
    <main className="flex-col">
      <Title title="Criando exercício"/>
      <ExerciseCreationForm />      
    </main>
  )
}