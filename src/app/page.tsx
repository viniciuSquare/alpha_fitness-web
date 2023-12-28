import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col">
      <h1 
        className="text-2xl font-bold py-4 text-primary"
      >Wellcome to Alpha Fitness</h1>
      <div className="grid grid-cols-3 gap-4">
        <ModuleCardLink label="Exercises" href="/exercises" />
        <ModuleCardLink label="Workouts" href="/workouts" />
        <ModuleCardLink label="Routines" href="/routines" />
      </div>
    </main>
  );
}

function ModuleCardLink(props: { href: string; label: string }) {
  const { href, label } = props;
  return (
    <Link href={href} className="rounded-md">
      <Card className="px-4 h-12 flex items-center">
        <CardTitle>{label}</CardTitle>
      </Card>
    </Link>
  );
}
