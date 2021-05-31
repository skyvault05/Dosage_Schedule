import logo from "./logo.svg";
import "./App.css";
import "./components/scss/Calendar.scss";
import Calendar from "./components/Calendar";
import axios from "axios";
import LoginWithKakao from "./components/kakaoLogin/LoginWithKakao";
const { Kakao } = window;

function App() {
  const testString = "";
  const url = "http://localhost:8080/react/test";

  axios
    .get(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => console.log("bye!!"));

  return (
    <div className="app">
      <LoginWithKakao></LoginWithKakao>
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            react<b>Calendar {testString}</b>
          </span>
        </div>
      </header>
      <main>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
