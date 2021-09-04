import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { 
    Container, 
    List, 
    InfoCart, 
    NameExercicies, 
    DescribeExercicies, 
    ContainerAnswer, 
    Answer, 
    AnswerEdit,
    ContainerButtons, 
    ContainerEmpty, 
    ButtonEdit, 
    ButtonDelete, 
    NameExerciciesEdit
} from "./style";


import icon_close from "../../assets/icons/close.png";
import { Fragment } from "react";

export default function ListaDeExercicios({ props: exercicios }) {

    const dispatch = useDispatch();
    const location = useHistory();

    const [ exercicio, setExercicio ] = useState([]);

    const [ editShow, setEditShow ] = useState(false);

    const [ exercicioEdit, setExercicioEdit ] = useState([]);

    //TODO -> Preciso implementar a regra para quando estiver sem exercicios para listar 
    //        ele possa inserir... ou fazer o redirect implementando os comandos abaixo
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

    useEffect( () => {
        console.log({ exercicioEdit })
    }, [ exercicioEdit ])

    function editExercice() {
        console.log("editExercice");
        
    }

    function handleInputsEdits(eventType, value) {

        const newObj = exercicioEdit[eventType] = value;

        console.log({ newObj });
        
        setExercicioEdit([ ...exercicioEdit, newObj ]);

    }

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
                                        <NameExercicies>
                                            {e} ?
                                        </NameExercicies>

                                        <NameExerciciesEdit 
                                            placeholder={e}  
                                            value={e}
                                            show={editShow}
                                            onChange={ ({ target }) => handleInputsEdits("title", target.value) }
                                        />
                                        
                                        <ContainerAnswer>
                                            {
                                                exercicio[e].map( (e, i) => (
                                                    <Fragment>
                                                        {
                                                            editShow ?
                                                            (
                                                                <AnswerEdit 
                                                                    inputColor={ e["RespostaCerta"].pontuacao > 0 ? "green" : "red"}
                                                                    placeholder={e["RespostaCerta"].descricao}  
                                                                    value={
                                                                        exercicioEdit
                                                                    }
                                                                    show={editShow}
                                                                    onChange={ (target) => handleInputsEdits(`ex${i}`, target.value) }
                                                                />

                                                            ) :
                                                            (
                                                                <Answer key={i} inputColor={ e["RespostaCerta"].pontuacao > 0 ? "green" : "red"} >
                                                                    {e["RespostaCerta"].descricao}
                                                                </Answer>
                                                            )
                                                        }

                                                    </Fragment>
                                                ))
                                            }
                                            
                                        </ContainerAnswer>
                                        <ContainerButtons>

                                            {
                                                
                                                editShow 
                                                ? <ButtonEdit onClick={ editExercice } >ok</ButtonEdit>        
                                                : ""
                                                // <ButtonEdit onClick={ () => setEditShow(true) } >Editar</ButtonEdit>

                                            }
                                            

                                        </ContainerButtons>
                                        
                                        {/* <ButtonDelete>
                                            <img src={icon_close} alt="Deletar" />
                                        </ButtonDelete> */}

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