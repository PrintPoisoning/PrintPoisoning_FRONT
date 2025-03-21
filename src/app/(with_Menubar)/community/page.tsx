"use client";

import { useRouter } from "next/navigation";

import { AlertModal } from "@lib/containers/client";

const CommunityPage = () => {
  const router = useRouter();

  return (
    <section>
      <AlertModal
        isShow
        onClose={() => router.replace("/")}
        message="현재 준비중인 서비스입니다!"
      />
    </section>
  );
};

export default CommunityPage;
