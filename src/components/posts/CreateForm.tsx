import { Input } from "@nextui-org/react";
import React from "react";
import FormButton from "../common/form-button";

interface CreateFormProps {
  formState: {
    errors: {
      title?: string[];
      content?: string[];
      _form?: string[];
    };
  };
  action: (payload: FormData) => void;
}

const CreatePostFormComponent = ({ formState, action }: CreateFormProps) => {
  return (
    <>
      <form action={action}>
        <div className="flex flex-col gap-4 p-4 w-80">
          <h3 className="text-2xl font-bold">Create a Post</h3>
          <Input
            label="Title"
            name="title"
            labelPlacement="outside"
            placeholder="Title of the post"
            width="250px"
            errorMessage={formState.errors.title?.join(",")}
            isInvalid={!!formState.errors.title}
            className="mb-4"
          />
          <Input
            label="Content"
            name="content"
            labelPlacement="outside"
            placeholder="Content of the post"
            width="250px"
            errorMessage={formState.errors.content?.join(",")}
            isInvalid={!!formState.errors.content}
            className="mb-4"
          />
          {formState.errors._form ? (
            <div className="bg-red-200 rounded border border-red-400 p-2">
              {formState.errors._form.join(",")}
            </div>
          ) : null}
          <FormButton>Create Post</FormButton>
        </div>
      </form>
    </>
  );
};

export default CreatePostFormComponent;
