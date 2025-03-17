import { singInWithKakao } from "@lib/apis";

const LoginPage = () => {
  return (
    <div>
      <form action={singInWithKakao}>
        <button>login</button>
      </form>
    </div>
  );
};

export default LoginPage;
