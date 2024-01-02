export default function RoutineEditionPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);

  return <p>{JSON.stringify(params)}</p>;
}
