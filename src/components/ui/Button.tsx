import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ButtonProps {
  id?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  containerClass?: string;
  onClick?: () => void;
}

export const Button = ({
  id,
  children,
  containerClass,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/10",
        containerClass
      )}
    >
      {LeftIcon && <LeftIcon className="inline-block mr-1" />}
      <span className="font-general relative inline-flex overflow-hidden text-xs uppercase tracking-wider">
        {children}
      </span>
      {RightIcon && <RightIcon className="inline-block ml-1" />}
    </button>
  );
};
