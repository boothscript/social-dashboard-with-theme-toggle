import React from "react";
import ReactDOM from "react-dom";
import { Server } from "miragejs";

import "./index.css";
import App from "./App";
import { followTotal, heroStats, stats } from "./Data/data";

new Server({
  routes() {
    this.namespace = "/api";

    this.get(
      "/stats",
      () => {
        return { followTotal, heroStats, stats };
      },
      { timing: 2000 }
    );
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
