import { signInWithKakao } from "@lib/apis";
import { BarButton } from "@lib/components/client";
import { KakaoLogoIcon } from "@lib/components/server";

const KakaoLoginButton = async () => {
  const signupAction = async () => {
    "use server";

    await signInWithKakao();
  };

  return (
    <form action={signupAction}>
      <BarButton className="bg-kakao_main text-black">
        <KakaoLogoIcon />
        <p>카카오로 계속하기</p>
      </BarButton>
    </form>
  );
};

export default KakaoLoginButton;
