import React from "react";

import { BoxEdit, ListExercicio } from "./style";

export default function Box() {

    const exercicios = [1,2,3,4];

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

    function cancel() {
        document.querySelectorAll("section#modulos > div > div").forEach( (e,i) => {
            e.style = 'filter: blur(0px);'
        });
        //setActEditorAdd(false)
    }

    return(
        <>
            <BoxEdit> 
                <form>
                    <label>Nome do Módulo</label>
                    <input type="text" placeholder="Digite o nome do seu Módulo" />
                    <label>Exercícios</label>

                    
                    <div className="group-exers" 
                        onDrop={(event) => drop_handler(event)} 
                        onDragOver={(event) => dragover_handler(event)} >
                        { exercicios.map(() =>  <div className="item" >Zona de soltura</div>) }
                    </div>
                </form>
                {/* {verificação para se tem exercicio} */}
                <ListExercicio>
                    {/* {aqui vai ter um array de exercicios} */}
                    { exercicios.map(() => <li className="item-exercicio"
                                                draggable={true} 
                                                onDragStart={ 
                                                    (event) => dragstart_handler(event) 
                                                } >item 1</li> ) }
                    
                </ListExercicio>
                <button onClick={ cancel }>
                    fechar
                </button>
            </BoxEdit>
        </>
    );
}