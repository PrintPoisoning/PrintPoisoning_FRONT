"use client";

import { useWarningFallback } from "@lib/hooks";

const CommunityPage = () => {
  const { FallbackComponent } = useWarningFallback();

  return <section>{FallbackComponent}</section>;
};

export default CommunityPage;
