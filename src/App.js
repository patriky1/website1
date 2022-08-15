import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

import Grid from "./componetes/grid/grid";

import { Grid2 } from "./componetes/grid/grid";
import { Alertbutton1 } from "./componetes/grid/grid";
function App() {
  return (
    <>
      <section>
        <Grid />
      </section>
      <section>
        <Alertbutton1/>
        <Grid2 />
        
      </section>

    </>
  );
}

export default App;
