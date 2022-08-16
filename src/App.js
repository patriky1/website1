import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Grid, { Grid2 } from "./componetes/grid/grid";

function App() {
  return (
    <>
      <section>
        <Grid />
      </section>
      <section>
        <Grid2 />
      </section>

    </>
  );
}

export default App;
