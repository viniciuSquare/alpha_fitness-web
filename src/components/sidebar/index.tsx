import Link from "next/link";
import { Separator } from "../ui/separator";

export function SideBar() {
  return (
    <nav>
      <Link href='exercises'>Exercises</Link>
      <Link href='workouts'>Workouts</Link>
      <Link href='routines'>Routines</Link>
      <Separator/>
      <Link href='profile'>My Profile</Link>
    </nav>
  )
}