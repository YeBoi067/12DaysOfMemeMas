import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Hatch from "./components/Hatch/Hatch";
import { HatchType, createCalendar } from "./helpers";
// Styles
import { GlobalStyle, StyledApp } from "./App.styles";
import Navbar from "./components/navbar/navbar";

const App: React.FC = () => {
  const [hatches, setHatches] = React.useState<HatchType[]>(createCalendar());

  const handleCLickHatch = (nr: number) => {
    setHatches((prev) =>
      prev.map((hatch) =>
        hatch.nr === nr ? { ...hatch, open: !hatch.open } : hatch
      )
    );
  };

  return (
    <>
      <div className="navContainer">
        <Navbar />
      </div>
      <StyledApp>
        <GlobalStyle />
        {hatches.map((hatch) => (
          <Hatch key={hatch.nr} hatch={hatch} handleClick={handleCLickHatch} />
        ))}
      </StyledApp>
    </>
  );
};

export default App;
