import { singInWithKakao } from "@lib/apis";
import { KakaoLogoIcon } from "@lib/components/server";

const KakaoLoginButton = () => {
  return (
    <form action={singInWithKakao}>
      <button className="w-[90%] h-[5.7rem] flex items-center justify-center gap-[1.6rem] rounded-[6rem] absolute bottom-[5.7rem] left-[50%] translate-x-[-50%] bg-kakao_main text-[1.6rem] font-semibold select-none">
        <KakaoLogoIcon />
        <p>카카오로 계속하기</p>
      </button>
    </form>
  );
};

export default KakaoLoginButton;
