"use client";

import { useWarningFallback } from "@lib/hooks";

const ProfilePage = () => {
  const { FallbackComponent } = useWarningFallback();

  return <section>{FallbackComponent}</section>;
};

export default ProfilePage;
