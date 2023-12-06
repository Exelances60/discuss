"use client";
import { createPost } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import FormButton from "../common/form-button";

interface PostCreateFormProps {
  slug: string;
}

const PostCreateForm = ({ slug }: PostCreateFormProps) => {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create a Post</Button>
        </PopoverTrigger>
        <PopoverContent>
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PostCreateForm;
