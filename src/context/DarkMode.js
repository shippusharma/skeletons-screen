import React, { createContext, useState } from 'react';

export const Mode = createContext();

export default function DarkMode(props) {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "black";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "white";
    }
  };

  /* <div className="form-check form-switch">
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  </div> */

  return (
    <Mode.Provider value={{ toggleMode }}>
      {props.children}
    </Mode.Provider>
  )
}


