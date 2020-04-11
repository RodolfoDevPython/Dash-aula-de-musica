import React from "react";

import { NavBar } from "./style";
import { useHistory } from "react-router-dom";

export default function NavigatorBar() {

    const location = useHistory();

    return (
        <NavBar>
            <li onClick ={ () => location.push("/modulos") } >Modulos</li>
            <li onClick ={ () => location.push("/exercicios") } >Exercicios</li>
            <li onClick ={ () => location.push("/alunos") } >Alunos</li>
        </NavBar>
    );
}