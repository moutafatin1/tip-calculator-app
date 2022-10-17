import React from "react";

type InputWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: string | undefined;
};

export type InputWrapperPassThroughProps = Omit<
  InputWrapperProps,
  "className" | "children"
>;

export const InputWrapper = (props: InputWrapperProps) => {
  const { children, className, error, label } = props;
  return (
    <div>
      <label className="">
        <div className="flex items-center justify-between ">
          {label && (
            <span className="mb-2 text-sm text-dark-grayish-cyan lg:text-base">
              {label}
            </span>
          )}
          {error && (
            <div role="alert" className="text-red-500">
              {error}
            </div>
          )}
        </div>
        <div>{children}</div>
      </label>
    </div>
  );
};
