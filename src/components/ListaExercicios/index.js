import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Container, List, InfoCart, NameExercicies, DescribeExercicies, ContainerAnswer, Answer, ContainerButtons, ButtonEdit, ContainerEmpty } from "./style";

export default function ListaDeExercicios({ props: exercicios }) {

    const dispatch = useDispatch();
    const location = useHistory();

    const [ exercicio, setExercicio ] = useState([]);

    //TODO -> Preciso implementar a regra para quando estiver sem exercicios para listar 
    //        ele possa inserir... fazer o redirect implementando os comandos abaixo
    //        dispatch({ type: "ADD_MODULO", modulo: reduceModulo });
    //        location.push("/exercicios")

    console.log({ exercicios })
    function redirectForAddQuestion() { 
        // dispatch({ type: "ADD_MODULO", modulo: reduceModulo });
        // location.push("/exercicios")
    }   

    useEffect( () => {
        let newArray = [];

        exercicios.exercicios.map( (e) => {
            newArray[e.descricao] = exercicios.exercicios.filter( item => item.descricao == e.descricao)
        })

        setExercicio(newArray)
        
    }, [ exercicios ]);

    return(
        <Container>

            { 
                exercicios.exercicios.length == 0 && Object.keys(exercicio).length > 0
                ? (
                    <ContainerEmpty>
                        <p>Não tem exercicios</p>
                        <button 
                            onClick={ () => redirectForAddQuestion() } 
                        >Quer adicionar</button>
                    </ContainerEmpty>
                ) 
                : (
                    <List>
                        {
                            Object.keys(exercicio).map( (e, i) => {

                                return (
                                    <InfoCart key={i}>
                                        <NameExercicies>{e} ? </NameExercicies>
                                        
                                        <ContainerAnswer>
                                            {
                                                exercicio[e].map( (e, i) => (
                                                    <>
                                                        <Answer key={i} inputColor={ e["RespostaCerta"].pontuacao > 0 ? "green" : "red"} >
                                                            {e["RespostaCerta"].descricao}
                                                        </Answer>
                                                    </>
                                                ))
                                            }
                                            
                                        </ContainerAnswer>
                                        <ContainerButtons>
                                            <ButtonEdit>Editar</ButtonEdit>
                                        </ContainerButtons>
                                    </InfoCart>
                                )

                            })
                        }
                        
                    </List>
                )
            }
            
        </Container>
    )
}