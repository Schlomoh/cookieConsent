import { StrictMode } from "react";
import { render } from "react-dom";
import Main from "./App";

render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("root")
);
