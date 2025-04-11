"use client";

import { useRouter } from "next/navigation";

import { AlertModal } from "@lib/containers/client";

const useWarningFallback = () => {
  const router = useRouter();

  return {
    FallbackComponent: (
      <AlertModal
        isShow
        onClose={() => router.back()}
        message="현재 준비중인 서비스입니다!"
      />
    ),
  };
};

export default useWarningFallback;
