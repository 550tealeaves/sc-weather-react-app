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
          <a href="https://affectionate-easley-dbc23c.netlify.app/" target="blank">
            hosted by Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

