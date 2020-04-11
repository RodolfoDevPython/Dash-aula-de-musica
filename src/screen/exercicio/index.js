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
            <Container >
                <form onSubmit={handleSave}>
                    <h2>Exercicios</h2>
                    <h3>Pergunta:</h3>
                    <textarea cols="30" rows="10" placeholder="Formule uma pergunta"></textarea>
                    <h3>Alternativas:</h3>
                    <label>A)</label>
                    <input placeholder="Resposta da alternativa A" type="text"/>
                    <label>B)</label>
                    <input placeholder="Resposta da alternativa B" type="text"/>
                    <label>C)</label>
                    <input placeholder="Resposta da alternativa C" type="text"/>
                    <label>D)</label>
                    <input placeholder="Resposta da alternativa D" type="text"/>
                    <button type="submit">Salvar</button>
                </form>
            </Container>
        </>
    )
}