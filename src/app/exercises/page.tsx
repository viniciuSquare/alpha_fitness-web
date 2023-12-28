import { Exercise } from "@/models/exercise.model";

export default function ExercisesList() {
  let exercise = new Exercise('Supino Reto', 'Chest', '1', '4', '12/10/8/8','REPETITION');

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

        <ExerciseItem exercise={exercise} />
      </div>
    </main>
  );
}

function ExerciseItem(props: { exercise: Exercise }) {
  const { exercise } = props;
  return (
    <div
      id="exercise"
      className="flex w-full gap-4 p-6 bg-gray-400 bg-opacity-60 rounded-lg"
    >
      <img src="images/exercises/supino.png"></img>
      <div className="w-full flex flex-col justify-between">
        <h2>{exercise.name}</h2>
        <div className="flex justify-between">
          <span>Descanso</span>
          <span>{exercise.restTime}</span>
        </div>
        <div className="flex justify-between">
          <span>Series</span>
          <span>{exercise.series}</span>
        </div>
      </div>
    </div>
  );
}
