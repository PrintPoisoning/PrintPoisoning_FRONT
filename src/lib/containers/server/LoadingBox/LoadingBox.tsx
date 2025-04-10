import { Skeleton } from "@lib/components/server";

const Loading = () => {
  return (
    <article className="w-full h-full p-[0.6rem] relative flex items-center justify-center">
      <Skeleton className="w-full h-full" />
    </article>
  );
};

export default Loading;
