import PostCreateForm from "@/components/posts/post-create-form";
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
      </div>
      <div>
        <PostCreateForm slug={params.slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
