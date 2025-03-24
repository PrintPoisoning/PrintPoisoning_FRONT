import { auth } from "@lib/apis";

const RedingPage = async () => {
  const session = await auth();

  console.log("rending page TEst :", session);
  return <main>RedingPage</main>;
};

export default RedingPage;
