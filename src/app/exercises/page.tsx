'use client'
import { Exercise } from "@/models/exercise.model";
import { ExerciseCard } from "./components/ExerciseCard";

export default function ExercisesList() {
  let exercise = new Exercise('Supino Reto', 'Chest', '60', '4', '12/10/8/8','REPETITION');

  return (
    <main>
      {/* <div id="header" className="w-full flex justify-between">
        <div className="h-14 w-14 bg-gray-400"></div>
        <div className="h-14 w-14 bg-gray-400 rounded-3xl"></div>
      </div>
      <div id="shortcut" className="w-full h-16 flex items-center">
        <button>Voltar</button>
      </div> */}

      <div id="exercises" className="w-full h-full bg-red-500">
        <h1 className="text-2xl font-bold">Workout Activities</h1>

        <span>Muscle Group: {exercise.group}</span>

        <ExerciseCard exercise={exercise} />
      </div>
    </main>
  );
}