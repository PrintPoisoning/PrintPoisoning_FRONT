import { singInWithKakao } from "@lib/apis";
import { Button } from "@lib/components/client";
import { KakaoLogoIcon } from "@lib/components/server";

const KakaoLoginButton = () => {
  return (
    <form
      action={singInWithKakao}
      className="w-full flex justify-center absolute bottom-[5.7rem]"
    >
      <Button className="w-[90%] h-[5.7rem] flex items-center justify-center gap-[1.6rem] rounded-[6rem] bg-kakao_main text-[1.6rem] font-semibold select-none">
        <KakaoLogoIcon />
        <p>카카오로 계속하기</p>
      </Button>
    </form>
  );
};

export default KakaoLoginButton;
