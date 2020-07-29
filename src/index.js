import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import "./index.scss";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CookiesProvider>
    <Router>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);

registerServiceWorker();
