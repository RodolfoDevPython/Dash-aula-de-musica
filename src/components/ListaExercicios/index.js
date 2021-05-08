import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Container, List, InfoCart, NameExercicies, DescribeExercicies, ContainerAnswer, Answer, ContainerButtons, ButtonEdit, ContainerEmpty } from "./style";

export default function ListaDeExercicios({ props: exercicios, props: reduceModulo }) {

    const dispatch = useDispatch();
    const location = useHistory();

    //TODO -> Preciso implementar a regra para quando estiver sem exercicios para listar 
    //        ele possa inserir... fazer o redirect implementando os comandos abaixo
    //        dispatch({ type: "ADD_MODULO", modulo: reduceModulo });
    //        location.push("/exercicios")

    console.log({ reduceModulo })
    function redirectForAddQuestion() {
        console.log(reduceModulo)
        // dispatch({ type: "ADD_MODULO", modulo: reduceModulo });
        // location.push("/exercicios")
    }   

    return(
        <Container>

            { 
                exercicios.exercicios.length == 0 
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
                        <InfoCart>
                            <NameExercicies>exercicios</NameExercicies>
                            <DescribeExercicies>Descrição</DescribeExercicies>
                            <ContainerAnswer>
                                <Answer>
                                    reposta correta
                                </Answer>
                                <Answer>
                                    reposta incorreta
                                </Answer>
                                <Answer>
                                    reposta incorreta
                                </Answer>
                                <Answer>
                                    reposta incorreta
                                </Answer>
                            </ContainerAnswer>
                            <ContainerButtons>
                                <ButtonEdit>Editar</ButtonEdit>
                            </ContainerButtons>
                        </InfoCart>
                        <InfoCart>
                            <NameExercicies>exercicios</NameExercicies>
                            <DescribeExercicies>Descrição</DescribeExercicies>
                            <ContainerAnswer>
                                <Answer>
                                    reposta correta
                                </Answer>
                                <Answer>    
                                    reposta incorreta
                                </Answer>
                                <Answer>
                                    reposta incorreta
                                </Answer>
                                <Answer>
                                    reposta incorreta
                                </Answer>
                            </ContainerAnswer>
                            <ContainerButtons>
                                <ButtonEdit>Editar</ButtonEdit>
                            </ContainerButtons>
                        </InfoCart>
                    </List>
                )
            }
            
        </Container>
    )
}