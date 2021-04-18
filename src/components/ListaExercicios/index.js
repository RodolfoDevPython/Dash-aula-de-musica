import React from "react";

import { Container, List, InfoCart, NameExercicies, DescribeExercicies, ContainerAnswer, Answer, ContainerButtons, ButtonEdit, ButtonDelete } from "./style";

export default function ListaDeExercicios() {


    return(
        <Container>
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
        </Container>
    )
}