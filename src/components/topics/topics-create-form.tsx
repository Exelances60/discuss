"use client";
import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";

const TopicsCreateForm = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col  gap-4 p-4 w-80">
            <h3 className="text-2xl font-bold">Create a Topic</h3>
            <Input
              label="Name"
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
            <Button color="success" type="submit">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicsCreateForm;
