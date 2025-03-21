import Image from "next/image";

import { BookLoginImage, CloverLoginImage, MascotLoginImage } from "./_assets";

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

      <div className="w-full h-[50%] relative flex items-center justify-center pointer-events-none">
        <Image
          src={CloverLoginImage}
          alt="clover_login_image"
          sizes="100% 100%"
          className="absolute bottom-[59%] left-[28%] animate-login_up_down_4s"
        />

        <Image
          src={BookLoginImage}
          alt="book_login_image"
          className="absolute top-[36%] left-[4rem] animate-login_up_down_6s"
        />

        <Image
          src={MascotLoginImage}
          alt="mascot_login_image"
          className="min-w-[36rem] absolute bottom-[-32%] right-[-26%] animate-login_up_down_8s"
        />
      </div>
    </article>
  );
};

export default LoginBackground;
