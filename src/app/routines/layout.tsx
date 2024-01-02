import { Skeleton } from "@/components/ui/skeleton";
import { RoutineContextProvider } from "@/context/routineContext";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: 'Routines',
    template: '%s | Routines'
  }
}
 
export default function RoutineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoutineContextProvider>
      <Suspense fallback={<LoadingFallback/>}>
        {children}
      </Suspense>
    </RoutineContextProvider>
  );
}


function LoadingFallback() {
  return (
    <Skeleton className="w-full h-full bg-current bg-opacity-50" />
  )
}