"use client";

import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { LoadingBox } from "@lib/containers/server";

import CustomErrorUI from "./components/CustomErrorUI/CustomErrorUI";

const CustomErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorUI}>
      <Suspense fallback={<LoadingBox />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
