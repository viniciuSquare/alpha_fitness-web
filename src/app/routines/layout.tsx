"use client";

import { RoutineContextProvider } from "@/context/routineContext";

export default function RoutineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RoutineContextProvider>{children}</RoutineContextProvider>;
}
