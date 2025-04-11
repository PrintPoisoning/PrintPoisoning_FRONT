"use client";

import { PropsWithChildren } from "react";

import { LoadingSpinner } from "@lib/components/server";

import { useRouteLoading } from "./hooks";

const PageChangingLoader = ({ children }: PropsWithChildren) => {
  const isRouteLoading = useRouteLoading();

  return (
    <>
      {children}

      {isRouteLoading && (
        <section className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-transparent_50">
          <LoadingSpinner
            size={"8rem"}
            wight={"1rem"}
          />
        </section>
      )}
    </>
  );
};

export default PageChangingLoader;
