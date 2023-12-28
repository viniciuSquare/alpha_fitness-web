import { cn } from "@/lib/utils";

export default function Title(props: {
  title: string;
  className?: string;
}) {
  const { title, className } = props;
  return (
    <h1 className={cn("text-2xl text-primary font-bold py-8", className)}>
      {title}
    </h1>
  );
}
