import React, { Component, useState } from "react";

import { Container, DivModulos, Input, ButtonAdd, BoxEdit, ListExercicio } from "./style";

import Lottie from 'react-lottie';

import NavigatorBar from "../../components/navBar";

import background from "../../assets/animations/learning-web-site.json";

import Box from "../../components/BoxEdit";

export default function Modulo() {

    const array = [1,2,3,4,5];

    const [ actEditorAdd , setActEditorAdd ] = useState();

    const options = {
        loop: true,
        autoplay: true, 
        animationData: background,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
      }
    };

    function handleEditOrAdd(el) {
        const { id } = el;

        document.querySelectorAll("section#modulos > div > div").forEach( (e,i) => {
            e.style = 'filter: blur(5px);'
        });
        
        setActEditorAdd(true);
    }

    return(
        <section id="modulos">
            <NavigatorBar />
            <Container>
                <Input placeholder="Procure seus Módulos" />
                <Lottie options={options}
                    height={400}
                    width={400}
                    speed={2}
                />
                
                <DivModulos>
                {
                    array.map( (e, i) => (
                        <div key={e} className="item" >
                            <button id={e} 
                                onClick={ (el) => handleEditOrAdd(el.target) } >editar</button>
                            <h1>Modulo title</h1>
                            <ul 
                                >
                                
                            </ul>
                            <button >excluir</button>
                        </div>  
                    ))
                }
                    <ButtonAdd onClick={(el) => handleEditOrAdd(el.target) }>add</ButtonAdd>
                </DivModulos>

            { actEditorAdd ? 
                    <Box /> 
                : ""
            }
            </Container>
        </section>
    );
}