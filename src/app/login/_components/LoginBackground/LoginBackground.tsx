import { BookLoginAsset, CloudLoginAsset, MascotLoginAsset } from "./_assets";

const LoginBackground = () => {
  return (
    <article className="w-full h-full flex justify-center items-center flex-col">
      <span className="w-[90%] flex flex-col gap-[1rem] text-size24 font-semibold select-none break-keep">
        <p>{"반가워요 :)"}</p>
        <span>
          <p>나만의 작은 책장</p>
          <p>
            <strong className="text-size26 text-main font-jalnan">책풀</strong>을 만들어 볼까요?
          </p>
        </span>
      </span>

      <div className="w-full h-[50%] relative flex items-center justify-center">
        <div className="absolute top-0 animate-login_up_down_4s">
          <CloudLoginAsset />
        </div>

        <div className="absolute bottom-[46%] left-[4rem] animate-login_up_down_6s">
          <BookLoginAsset />
        </div>

        <div className="absolute bottom-0 right-[-11rem] animate-login_up_down_8s">
          <MascotLoginAsset />
        </div>
      </div>
    </article>
  );
};

export default LoginBackground;
