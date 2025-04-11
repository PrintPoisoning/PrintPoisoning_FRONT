"use client";

import { useWarningFallback } from "@lib/hooks";

const MyBookPage = () => {
  const { FallbackComponent } = useWarningFallback();

  return <section>{FallbackComponent}</section>;
};

export default MyBookPage;
