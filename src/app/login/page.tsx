import { KakaoLoginButton, LoginBackground } from "./_components";

const LoginPage = () => {
  return (
    <section className="w-full h-full relative">
      <LoginBackground />
      <KakaoLoginButton />
    </section>
  );
};

export default LoginPage;
