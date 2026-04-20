import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-panel rounded-[2rem] p-6 transition duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface-strong)] ${className}`}
    >
      {children}
    </div>
  );
}
