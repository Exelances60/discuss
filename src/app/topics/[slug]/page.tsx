import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/post";
import React from "react";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = async ({ params }: TopicShowPageProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold">Topic: {params.slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(params.slug)} />
      </div>
      <div>
        <PostCreateForm slug={params.slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
