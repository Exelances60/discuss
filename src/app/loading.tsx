import { CircularProgress } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] items-center flex justify-center">
      <CircularProgress size="sm" aria-label="Loading..." />
    </div>
  );
};

export default Loading;
