import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
}
