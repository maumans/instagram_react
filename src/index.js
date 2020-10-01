import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './custom.scss'
import './index.css';
import RouteFunct from "./components/Route"

import Accueil from "./components/Accueil";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <RouteFunct/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
