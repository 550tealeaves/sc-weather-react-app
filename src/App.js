import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <footer>
        <small>
          Project coded by Nastasia Pollas and is{" "}
          <a
            href="https://github.com/550tealeaves/sc-weather-react-app"
            target="blank"
          >
            open-source code on Github
          </a>{" "}
          and{" "}
          <a href="https://distracted-dubinsky-e6b5c9.netlify.app/" target="blank">
            hosted by Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

