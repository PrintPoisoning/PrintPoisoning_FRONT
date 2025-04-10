import { LoadingSpinner, Skeleton } from "@lib/components/server";

const LoadingBox = () => {
  return (
    <article className="w-full h-full p-[0.6rem] relative flex items-center justify-center">
      <Skeleton className="w-full h-full" />

      <span className="w-[4rem] h-[4rem] absolute">
        <LoadingSpinner />
      </span>
    </article>
  );
};

export default LoadingBox;
