import { Skeleton } from "@nextui-org/react";
import React from "react";

const PostShowLoading = () => {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-48"></Skeleton>
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h-6 w-full rounded"></Skeleton>
        <Skeleton className="h-6 w-full rounded"></Skeleton>
        <Skeleton className="h-6 w-full rounded"></Skeleton>
      </div>
    </div>
  );
};

export default PostShowLoading;
