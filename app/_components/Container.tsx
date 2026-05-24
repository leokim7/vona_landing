import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
