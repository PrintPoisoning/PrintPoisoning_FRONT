export const ERROR_MESSAGE = (code: string) => {
  switch (code) {
    case "404":
      return "존재하지 않는 페이지 혹은 요청입니다.";

    case "1000":
      return "서버에서 오류가 발생했습니다.";

    default:
      return "일시적인 오류입니다!";
  }
};
