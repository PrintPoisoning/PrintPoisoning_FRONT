"use client";

import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Loading } from "@lib/containers/server";

import CustomErrorUI from "./components/CustomErrorUI/CustomErrorUI";

const CustomErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorUI}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
