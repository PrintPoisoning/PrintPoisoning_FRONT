"use client";

import { useWarningFallback } from "@lib/hooks";

const RecordPage = () => {
  const { FallbackComponent } = useWarningFallback();

  return <section>{FallbackComponent}</section>;
};

export default RecordPage;
