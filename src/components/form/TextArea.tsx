import * as React from "react";
import { get, RegisterOptions, useFormContext } from "react-hook-form";

import ErrorMessage from "@/components/form/ErrorMessage";
import HelperText from "@/components/form/HelperText";
import LabelText from "@/components/form/LabelText";
import clsxm from "@/lib/clsxm";

export type TextAreaProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  containerClassName,
  maxLength = 1000,
  readOnly = false,
  ...rest
}: TextAreaProps) {
  const [value, setValue] = React.useState("");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  const textArea = register(id, validation);

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    textArea.onChange(e);
    setValue(e.currentTarget.value);
  };

  return (
    <div className={clsxm("w-full space-y-1.5", containerClassName)}>
      {label && (
        <LabelText required={validation?.required ? true : false}>
          {label}
        </LabelText>
      )}

      <div className="relative">
        <textarea
          {...textArea}
          id={id}
          name={id}
          readOnly={readOnly}
          disabled={readOnly}
          maxLength={maxLength}
          onChange={handleChange}
          className={clsxm(
            "h-full w-full rounded-md border-none px-2.5 py-2.5 ",
            "ring-1 ring-typo-outline1 focus:ring-typo-outline1",
            "text-bodytext",
            "focus:outline-1 focus:outline-success-active focus:ring-inset",
            "hover:ring-2 hover:ring-inset hover:ring-success-main",
            "placeholder:text-sm placeholder:text-[#9AA2B1] focus:placeholder:text-typo-secondary",
            readOnly && "cursor-not-allowed",
            error &&
              "border-none ring-2 ring-inset ring-danger-main placeholder:text-typo-secondary focus:ring-danger-main focus:outline-danger-active",
            className
          )}
          aria-describedby={id}
          {...rest}
        />

        <p className="absolute bottom-2.5 right-6 text-paragraph">
          {value.length}/{maxLength}
        </p>
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}
