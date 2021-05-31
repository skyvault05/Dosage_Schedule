import React from "react";
const { Kakao } = window;

const LoginWithKakao = () => {
  const onLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        alert(JSON.stringify(authObj));
        const data = Kakao.API.request({
          url: "/v2/user/me",
        });

        console.log(data);
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <a id="custom-login-btn" onClick={onLogin}>
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
        alt="loginButton"
      />
    </a>
  );
};

export default LoginWithKakao;
