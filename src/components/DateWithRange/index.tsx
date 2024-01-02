import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export function DateWithRange(props: {
  className?: string;
  from?: Date;
  to?: Date;
}) {
  const { className, from, to } = props;
  return (
    <div
      className={cn(
        "flex items center justify-start text-left font-normal",
        className
      )}
    >
      <CalendarIcon className="mr-2 h-5 w-5" />
      {from && to && (
        <>
          {format(from, "LLL dd")} - {format(to, "LLL dd, y")}
        </>
      )}
    </div>
  );
}
