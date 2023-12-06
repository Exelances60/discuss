"use client";
import { search } from "@/actions";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import FormButton from "./common/form-button";

interface SearchInputProps {
  topics: string[];
}

const SearchInput = ({ topics }: SearchInputProps) => {
  const searchParams = useSearchParams();

  return (
    <form action={search}>
      <Autocomplete
        name="term"
        placeholder="Search"
        size="sm"
        className="mx-2"
        defaultInputValue={searchParams.get("term") || ""}
      >
        {topics.map((topic) => (
          <AutocompleteItem key={topic} value={topic}>
            {topic}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <FormButton>Search</FormButton>
    </form>
  );
};

export default SearchInput;
