import React from "react";

import { Game } from "./styles";

export default ({ img, click }) => (
  <Game>
    <img src={img} width="150" height="150" alt="shop game" onClick={click} />
  </Game>
);
