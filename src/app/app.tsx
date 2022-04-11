import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import { Home } from "@pages/home";
import { About } from "@pages/about";
import { Contact } from "@pages/contact";
import { Layout } from "@layers/layout";

import "./App.scss";

export function App(): JSX.Element {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Layout}
            />
            <Route
                exact
                path="/home"
                component={Home}
            />
            <Route
                exact
                path="/about"
                component={About}
            />
            <Route
                exact
                path="/contact"
                component={Contact}
            />
        </Switch>
    );
}
