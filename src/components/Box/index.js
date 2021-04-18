import React, { useEffect, useState } from "react";

import { BoxContainer, ListExercicio } from "./style";

import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Box() {

    const [ moduloInfo, setModulo ] = useState({ title: null, describe: null });
    const [ messageInfo, setMessageInfo ] = useState(false);

    const { modulo } = useSelector( state => state.boxAction );
    const dispatch = useDispatch();

    const location = useHistory();

    function dragstart_handler(ev) {
        console.log("dragStart");
        // Adiciona o id do elemento em questão ao objeto de transferência de dados (dataTransfer)
        const classe = ev.target.getAttribute("class");

        ev.dataTransfer.setData("text/plain", classe);
    }
       
    function dragover_handler(ev) {
        ev.preventDefault();
        // Define o dropEffect para ser do tipo move
        ev.dataTransfer.dropEffect = "move"
    }

    function drop_handler(ev) {
        ev.preventDefault();
        console.log(ev.dataTransfer)
        // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
        var data = ev.dataTransfer.getData("text");
        
        ev.target.appendChild(document.querySelector(`.${data}`));

    }

    async function handleInsertModulo(e, type) {

        e.preventDefault();
        console.log(moduloInfo);

        const { data } = await api.post("/modulo", moduloInfo);

        setMessageInfo(data.message);

        dispatch({ type , modulo: data.modulo });

        location.push("/exercicios");

    }

    async function handleUpdateModulo(e) {
        e.preventDefault();
        console.log("moduloInfo");
        console.log(moduloInfo);
        console.log(modulo)

        // api.put("/modulo/:id", {
        //     title, 
        //     describe
        // })
        //put /modulo/:id
        //body { title, describe }

    }

    function cancel() {
        dispatch({ type: "BOX_CLOSE" })
    }

    return(
        <>
            <BoxContainer> 
                <form onSubmit={ (e) => !modulo ? handleInsertModulo(e, "ADD_MODULO") : handleUpdateModulo(e)  } >
                    <label>Título do Módulo</label>
                    <input 
                        type="text" 
                        placeholder="Digite o Título do seu Módulo" 
                        required 
                        value={ modulo?.title }
                        onChange={ ({ target }) => setModulo({ ...moduloInfo, title: target.value }) }
                    />

                    <label>Descrição do Módulo</label>
                    <input 
                        type="text" 
                        placeholder="Digite o Descrição do seu Módulo" 
                        required 
                        value={ modulo?.describe }
                        onChange={ ({ target }) => setModulo({ ...moduloInfo, describe: target.value }) }
                    />

                    <button>
                        {!modulo ? "Cadastrar": "Editar"}
                    </button>

                </form>
                
                <button onClick={ cancel }>
                    fechar
                </button>
            </BoxContainer>
        </>
    );
}