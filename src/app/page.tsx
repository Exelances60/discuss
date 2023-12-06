import PostList from "@/components/posts/post-list";
import PostShowLoading from "@/components/posts/post-show-loading";
import TopicsCreateForm from "@/components/topics/topics-create-form";
import TopicList from "@/components/topics/topics-list";
import { fetchTopPosts } from "@/db/queries/post";
import { Divider } from "@nextui-org/react";
import { cookies } from "next/dist/client/components/headers";
import { Suspense } from "react";

export default async function Home() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("authjs.session-token");
  if (!cookie || !cookie.value) {
    return (
      <div className="w-full  flex items-center justify-center">
        <h1>Not logged in</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold">Create Topic</h1>
        <Suspense fallback={<PostShowLoading />}>
          <PostList fetchData={fetchTopPosts} />
        </Suspense>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicsCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg my-2 font-bold">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
