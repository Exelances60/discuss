"use client";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import FormButton from "../common/form-button";

interface CreateFormActionProps {
  action: (payload: FormData) => void;
  formState: any;
  title: string;
  buttonTitle: string;
}

const CreateFormAction = ({
  action,
  formState,
  title,
  buttonTitle,
}: CreateFormActionProps) => {
  return (
    <>
      <form action={action}>
        <div className="flex flex-col  gap-4 p-4 w-80">
          <h3 className="text-2xl font-bold">{title}</h3>
          <Input
            label={title}
            name="name"
            labelPlacement="outside"
            id="topic-title"
            placeholder="Name of the topic"
            width="250px"
            errorMessage={formState.errors.name?.join(",")}
            isInvalid={!!formState.errors.name}
            className="mb-4"
          />

          <Textarea
            name="description"
            label="Description"
            errorMessage={formState.errors.description?.join(",")}
            isInvalid={!!formState.errors.description}
            labelPlacement="outside"
            placeholder="Describe your topic"
          />
          {formState.errors._form ? (
            <div className="bg-red-200 rounded border border-red-400 p-2">
              {formState.errors._form.join(",")}
            </div>
          ) : null}
          <FormButton>{buttonTitle}</FormButton>
        </div>
      </form>
    </>
  );
};

export default CreateFormAction;
