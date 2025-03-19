const LoginBackground = () => {
  return (
    <article className="w-full h-full flex justify-center items-center flex-col">
      <span className="w-[90%] flex flex-col gap-[1rem] text-size24 font-semibold select-none">
        <p>{"반가워요 :)"}</p>
        <span>
          <p>나만의 작은 책장</p>
          <p>
            <strong className="text-size26 text-main">책풀</strong>을 만들어 볼까요?
          </p>
        </span>
      </span>

      <div className="w-full h-[60%] relative border-2 border-red-300"></div>
    </article>
  );
};

export default LoginBackground;
