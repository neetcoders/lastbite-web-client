"use client";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import HelperText from "@/components/form/HelperText";
import Input from "@/components/form/Input";
import LabelText from "@/components/form/LabelText";
import SelectInput from "@/components/form/SelectInput";
import TextArea from "@/components/form/TextArea";

type SandboxForm = {
  text: string;
  textReadOnly: string;
  textWithPrefix: string;
  textWithSuffix: string;
  textWithHelper: string;
  textWithHelperReadOnly: string;
  textWithValidation: string;
  textWithValidationReadOnly: string;
  textWithValidationHelper: string;
  textWithValidationHelperReadOnly: string;
  PasswordInput: string;
  textArea: string;
  textAreaReadOnly: string;
  textAreaWithHelper: string;
  textAreaWithHelperReadOnly: string;
  textAreaWithValidation: string;
  textAreaWithValidationReadOnly: string;
  textAreaWithValidationHelper: string;
  textAreaWithValidationHelperReadOnly: string;
  select: "male" | "female";
  selectReadOnly: "male" | "female";
  searchableSelect: string;
};

export default function FormSandbox() {
  const methods = useForm<SandboxForm>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<SandboxForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  return (
    <div className="mx-auto w-fit space-y-4 p-6">
      <h5 className="text-h5 font-bold text-center">Form</h5>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-fit space-y-4">
          <Input id="text" label="Text" placeholder="Placeholder" />

          <Input
            id="textReadOnly"
            label="Text (Read Only)"
            placeholder="Placeholder"
            defaultValue={"Read Only"}
            readOnly={true}
          />

          <Input
            id="textWithHelper"
            label="Text With Helper"
            placeholder="Placeholder"
            helperText="This is helper text"
          />

          <Input
            id="textWithHelperReadOnly"
            label="Text With Helper (Read Only)"
            placeholder="Placeholder"
            helperText="This is helper text"
            readOnly={true}
            defaultValue={"Helper Text"}
          />

          <Input
            id="textWithValidation"
            label="Text With Validation"
            placeholder="Placeholder"
            validation={{
              required: "Field must be filled",
              minLength: {
                value: 3,
                message: "Field must be at least 3 characters",
              },
            }}
          />

          <Input
            id="textWithValidationHelper"
            label="Text With Validation And Helper"
            placeholder="Placeholder"
            helperText="This is helper text"
            validation={{
              required: "Field must be filled",
              minLength: {
                value: 3,
                message: "Field must be at least 3 characters",
              },
            }}
          />

          <Input
            id="textWithValidationHelperReadOnly"
            label="Text With Validation And Helper (Read Only)"
            placeholder="Placeholder"
            helperText="This is helper text"
            validation={{
              required: "Field must be filled",
              minLength: {
                value: 3,
                message: "Field must be at least 3 characters",
              },
            }}
            readOnly={true}
            defaultValue={"Helper Text"}
          />

          <Input
            id="PasswordInput"
            label="Password Input"
            placeholder="Placeholder"
            validation={{
              required: "Field must be filled",
            }}
            type="password"
          />

          <TextArea
            id="textArea"
            label="Text Area"
            placeholder="Placeholder"
            maxLength={1234}
          />

          <TextArea
            id="textAreaReadOnly"
            label="Text Area (Read Only)"
            placeholder="Placeholder"
            readOnly={true}
          />

          <TextArea
            id="textAreaWithHelper"
            label="Text Area With Helper"
            placeholder="Placeholder"
            helperText="This is helper text"
          />

          <TextArea
            id="textAreaWithHelperReadOnly"
            label="Text Area With Helper (Read Only)"
            placeholder="Placeholder"
            helperText="This is helper text"
            readOnly={true}
          />

          <TextArea
            id="textAreaWithValidation"
            label="Text Area With Validation"
            placeholder="Placeholder"
            validation={{ required: "Field must be filled" }}
          />

          <TextArea
            id="textAreaWithValidationReadOnly"
            label="Text Area With Validation (Read Only)"
            placeholder="Placeholder"
            validation={{ required: "Field must be filled" }}
            readOnly={true}
          />

          <TextArea
            id="textAreaWithValidationHelper"
            label="Text Area With Validation And Helper"
            placeholder="Placeholder"
            helperText="This is helper text"
            validation={{ required: "Field must be filled" }}
          />

          <TextArea
            id="textAreaWithValidationHelperReadOnly"
            label="Text Area With Validation And Helper (Read Only)"
            placeholder="Placeholder"
            helperText="This is helper text"
            validation={{ required: "Field must be filled" }}
            readOnly={true}
          />

          {/* Select Input */}
          <SelectInput
            id="selectReadOnly"
            label="Select Input Read Only"
            placeholder="(Option)"
            readOnly
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <SelectInput
            id="selectInput"
            label="Select Input"
            placeholder="(Option)"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <SelectInput
            id="selectInputWithHelperText"
            label="Select Input With Helper Text"
            placeholder="(Option)"
            helperText="Helper Text"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <SelectInput
            id="selectInputRequired"
            label="Select Input Required"
            placeholder="(Option)"
            validation={{ required: "This field is required" }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <SelectInput
            id="selectInputRequiredWithHelperText"
            label="Select Input Required With Helper Text"
            placeholder="(Option)"
            helperText="Helper Text"
            validation={{ required: "This field is required" }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <button
            type="submit"
            className="w-full rounded-2xl bg-primary-main p-3"
          >
            <p className="text-white text-title font-semibold">Submit</p>
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
