"use client";
import { createTopic } from "@/actions";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";
import CreateFormAction from "./CreateFormAction";

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
        <CreateFormAction
          formState={formState}
          action={action}
          title="Create Topic"
          buttonTitle="Create"
        />
      </PopoverContent>
    </Popover>
  );
};

export default TopicsCreateForm;
