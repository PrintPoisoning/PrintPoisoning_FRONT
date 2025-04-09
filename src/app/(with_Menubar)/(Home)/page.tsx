import { signOutWithForm } from "@lib/apis";
import { Button } from "@lib/components/client";

const RedingPage = () => {
  return (
    <main>
      <Button
        className="bg-main"
        onClick={signOutWithForm}
      >
        임시 로그아웃
      </Button>
    </main>
  );
};

export default RedingPage;
