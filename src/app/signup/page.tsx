import { SignupForm, SignupHeader } from "./_components";

const SignupPage = () => {
  return (
    <section className="flex flex-col h-screen">
      <SignupHeader />
      <SignupForm />
    </section>
  );
};

export default SignupPage;
