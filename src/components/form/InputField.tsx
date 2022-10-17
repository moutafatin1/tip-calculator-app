import clsx from "clsx";
import React from "react";
import { InputWrapper, InputWrapperPassThroughProps } from "./InputWrapper";

type InputFieldProps = InputWrapperPassThroughProps &
  React.HTMLProps<HTMLInputElement> & {
    type?: "text" | "email" | "password" | "number";
    className?: string;
    startIcon?: React.ReactNode;
  };

export const InputField = (props: InputFieldProps) => {
  const {
    className,
    error,
    label,
    type = "number",
    startIcon,
    ...rest
  } = props;
  return (
    <InputWrapper label={label} error={error}>
      <div className="relative">
        <input
          type={type}
          className={clsx(
            "w-full  appearance-none rounded-md border-2 border-transparent bg-very-light-grayish-cyan py-2 pr-5 text-right text-2xl text-very-dark-cyan outline-none focus:border-strong-cyan",
            className,
            error && "border-red-500"
          )}
          {...rest}
        />
        <span className="absolute left-3  top-1/2  -translate-y-1/2">
          {startIcon}
        </span>
      </div>
    </InputWrapper>
  );
};
