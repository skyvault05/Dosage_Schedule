import logo from "./logo.svg";
import "./App.css";
import "./components/scss/Calendar.scss";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="app">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            react<b>Calendar</b>
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
