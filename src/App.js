import React, {useState} from "react";
import ReactDOM from "react-dom";
import SearchPrams from "./SearchPrams";
import { Router, Link } from "@reach/router";
import Details from './Details'
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("orange");
  return (
      <div>
        <ThemeContext.Provider value={theme}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
            <Router>
              <SearchPrams path="/" />
            </Router>
            <Router >
              <Details path="/details/:id" />
            </Router>
          </ThemeContext.Provider>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
