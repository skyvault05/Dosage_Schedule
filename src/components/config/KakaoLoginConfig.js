const { Kakao } = window;

const KakaoLoginConfig = () => {
  Kakao.init("24a7742a39684042e5958fdac7291d13");
  Kakao.isInitialized();
};

export default KakaoLoginConfig;
