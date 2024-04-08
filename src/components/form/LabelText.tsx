import { ReactNode } from "react";

import clsxm from "@/lib/clsxm";

export default function LabelText({
  children,
  labelTextClasname,
  required,
}: {
  children: ReactNode;
  labelTextClasname?: string;
  required?: boolean;
}) {
  return (
    <label>
      <p
        className={clsxm(
          "text-paragraph font-bold text-typo-main",
          labelTextClasname
        )}
      >
        {children} {required && <span className="text-danger-main">*</span>}
      </p>
    </label>
  );
}
