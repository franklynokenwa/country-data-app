import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "../css/App.css";
import CountryInfo from "../pages/CountryInfo";
import Countries from "./Countries";

function App() {
  const [data, setData] = useState([]);
  const [appMode, setAppMode] = useState({});
  const [appModeState, setAppModeState] = useState("false");
  const [searchIconDisplay, setSearchIconDisplay] = useState("visible");

  useEffect(() => {
    const api = "https://restcountries.com/v2/all";
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function toggleSearchIconDisplay(event) {
    if (event.target === document.activeElement) {
      setSearchIconDisplay("hidden");
    } else {
      setSearchIconDisplay("visible");
    }
  }

  function toggleMode() {
    setAppModeState("true");
    if (appModeState === "true") {
      setAppMode({
        darkModeBackground: "hsl(207, 26%, 17%)",
        headerColor: "hsl(0, 0%, 100%)",
        darkPadding: "10rem",
        darkOverflow: "hidden",
        countriesContainerColor: " hsl(209, 23%, 22%)",
        countriesContainerP: "hsl(0, 0%, 100%)",
        searchColor: "hsl(209, 23%, 22%)",
        navBackground: "-1px 4px 4px 0px hsl(207, 26%, 17%)",
        backArrowBorder: "1px solid hsl(209, 23%, 22%)",
        backArrowColor: "hsl(209, 23%, 22%)",
      });

      setAppModeState("false");
    } else if (appModeState === "false") {
      setAppMode({});
    }
  }

  const newStyles = {
    body: {
      backgroundColor: appMode.darkModeBackground,
    },
    h2: {
      color: appMode.headerColor,
    },
    p: {
      color: appMode.countriesContainerP,
    },
    countriesContainerColor: {
      backgroundColor: appMode.countriesContainerColor,
      boxShadow: appMode.navBackground,
    },
    searchColor: {
      backgroundColor: appMode.searchColor,
      color: appMode.headerColor,
    },
    searchIconStyle: {
      color: appMode.headerColor,
      visibility: searchIconDisplay,
    },
    backArrowStyle: {
      backgroundColor: appMode.backArrowColor,
      border: appMode.backArrowBorder,
      color: appMode.headerColor,
    },
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Countries
            data={data}
            newStyles={newStyles}
            toggleMode={toggleMode}
            toggleSearchIconDisplay={toggleSearchIconDisplay}
          />
        </Route>
        <Route path={`/countries/:name`}>
          <CountryInfo
            data={data}
            newStyles={newStyles}
            toggleMode={toggleMode}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
