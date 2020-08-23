import React, { useState } from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <span
          className="language-selector"
          onClick={() => setLanguage("English")}
        >
          EN
        </span>
        <span
          className="language-selector"
          onClick={() => setLanguage("Spanish")}
        >
          ES
        </span>
      </div>

      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
