
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "section-title text-gray-700 dark:text-gray-300"
      )}>{title}</h2>
      {subtitle && (
        <p className="section-subtitle text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
