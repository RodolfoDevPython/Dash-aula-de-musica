import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NavigatorBar from "../../components/navBar";

import ListaExercicios from "../../components/ListaExercicios"; 

import { Container } from "./style";

import api from "../../services/api";

import FormQuestion from "../../components/FormQuestion";

export default function Exercicio() {

    const { reduceModulo, showListQuestion } = useSelector( state => state.chooseModulo );
    const [ exercicios, setExercicios ] = useState([]);

    useEffect( () => {

        async function fetchData() {
            
            if (showListQuestion)  {

                console.log("aquiii")
                
                const { data } = await api.get(`/exercicios/${reduceModulo.id}`);
    
                setExercicios(data)
            }

        }

        fetchData();

    }, [reduceModulo])

    return(
        <main>
            <NavigatorBar />

            <Container>
                
                { 
                    !showListQuestion ? 
                    (
                        <FormQuestion />
                    )
                    : 
                    (
                        <ListaExercicios props={{ exercicios, module }} />
                    )
                }
                
                {
                    /**
                     * TODO -> Implementar o container de lista de Exercicios para quando for atualizado um modulo. 
                     * obs: o container da lista foi iniciado.
                     */
                }


            </Container>
        </main>
    )
}