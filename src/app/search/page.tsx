import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/post";
import { redirect } from "next/navigation";
import React from "react";

interface SearchProps {
  searchParams: {
    term: string;
  };
}

const Search = ({ searchParams }: SearchProps) => {
  const { term } = searchParams;
  if (!term) {
    redirect("/");
  }
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
};

export default Search;
