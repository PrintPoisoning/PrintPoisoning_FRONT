"use client";

import { signOutWithForm, useDeleteUserMutation } from "@lib/apis";
import { Button } from "@lib/components/client";

const RedingPage = () => {
  const { mutate: deleteUser } = useDeleteUserMutation();

  return (
    <main>
      <Button
        className="bg-main"
        onClick={signOutWithForm}
      >
        임시 로그아웃
      </Button>

      <Button
        className="bg-main"
        onClick={() => {
          deleteUser();
        }}
      >
        회원탈퇴
      </Button>
    </main>
  );
};

export default RedingPage;
