import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {SettingsPlace} from "./mocks/settings.js";
import {offers} from "./mocks/offers.js";

ReactDOM.render(
    <App
      placesCount = {SettingsPlace.PLACES_COUNT}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
