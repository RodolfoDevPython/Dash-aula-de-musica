import React, { useState } from "react";

import NavigatorBar from "../../components/navBar";

import { Container } from "./style";

export default function Exercicio() {

    function handleSave(){
        console.log("teste")
        alert("aquiii")
    }

    return(
        <>
            <NavigatorBar />
            <Container>
                <form onSubmit={handleSave}>
                    <div className="question">
                        <h3>Pergunta:</h3>
                        <textarea placeholder="Formule uma pergunta"></textarea>
                    </div>
                    <div className="alternatives">
                        <h3>Alternativas:</h3>
                        <div className="a">
                            <label>A)</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <div className="b">
                            <label>B)</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <div className="c">
                            <label>C)</label>
                            <textarea cols="30" rows="10" placeholder="Resposta correta"></textarea>
                        </div>
                        <div className="d">
                            <label>D)</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit">Salvar</button>
                    </div>
                    
                </form>
            </Container>
        </>
    )
}