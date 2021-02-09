import logo from "./logo.svg";
import "./App.css";
import * as puppeteer from "puppeteer";

async function robo() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://sistemas.ufsc.br/login?service=https%3A%2F%2Fmoodle.ufsc.br%2Flogin%2Findex.php"
  );
  await page.screenshot({ path: "example.png" });
  await browser.close();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => robo()}>aaa</button>
    </div>
  );
}

export default App;
