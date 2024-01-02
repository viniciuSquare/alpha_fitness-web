import Title from "@/components/ui/title";
import { WorkoutService } from "@/services/workout.service";

export default async function WorkoutsPage() {
  const workouts = await new WorkoutService().workouts();

  return (
    <main>
      <Title title="Workouts" />
      {
        workouts.length ? (
          <ul>
            {workouts.map((workout, index) => (
              <li key={workout.id}>{workout.label}</li>
            ))}
          </ul>
        ) : null
      }
    </main>
  )
}