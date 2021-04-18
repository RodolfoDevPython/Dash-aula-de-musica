import React from "react";

import { NavBar } from "./style";
import { useHistory } from "react-router-dom";

export default function NavigatorBar() {

    const location = useHistory();

    return (
        <NavBar>
            <li onClick ={ () => location.push("/modulos") } ><a>Modulos</a></li>
            <li onClick ={ () => location.push("/exercicios") } ><a>Exercicios</a></li>
            <li onClick ={ () => location.push("/alunos") } ><a>Alunos</a></li>
        </NavBar>
    );
}