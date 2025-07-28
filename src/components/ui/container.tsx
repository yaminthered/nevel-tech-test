import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-5 lg:max-w-6xl", className)}>{children}</div>
  );
}

export default Container;
