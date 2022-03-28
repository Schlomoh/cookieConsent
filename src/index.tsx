import { StrictMode } from "react";
import { render } from "react-dom";
import Main from "./app";

render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("root")
);
