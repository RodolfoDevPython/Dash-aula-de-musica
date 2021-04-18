import React from "react";

import Main from "./screen/main";
import Modulo from "./screen/modulos";
import Exercicio from "./screen/exercicio";
import Alunos from "./screen/alunos";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const Router = () => (
    <BrowserRouter>
        <Switch >
            <Provider store={store} >
                <Route exact path="/" component={Main} />
                <Route exact path="/exercicios" component={Exercicio} />
                <Route exact path="/modulos" component={Modulo} />
            </Provider>
            <Route exact path="/alunos" component={Alunos} />
        </Switch>
    </BrowserRouter>
);

export default Router;