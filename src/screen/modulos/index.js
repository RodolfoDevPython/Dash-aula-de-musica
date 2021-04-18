import React, { useEffect, useState } from "react";

import { Container, DivModulos, Input, ButtonAdd, BoxEdit, ListExercicio } from "./style";

import { useHistory } from "react-router-dom";

import Lottie from 'react-lottie';

import NavigatorBar from "../../components/navBar";

import background from "../../assets/animations/learning-web-site.json";

import Box from "../../components/Box";

import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";


export default function Modulo() {

    const { boxShow } = useSelector( state => state.boxAction );

    const [ modulos, setModulos ] = useState([]);

    const dispatch = useDispatch();

    const options = {
        loop: true,
        autoplay: true, 
        animationData: background,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
      }
    };

    function handleEditOrAdd(type = null, modulo = false) {

        console.log("modulo")
        console.log(modulo)
        dispatch({ type, modulo });
        
    }

    useEffect( () => {
        async function fetchData() {

            const { data } = await api.get("/modulos");
           
            setModulos(data.modulos);

        }

        fetchData();
    }, []);

    useEffect( () => {
        document.querySelectorAll("section#modulos > div > div").forEach( (e,i) => {
            e.style = `filter: blur(${boxShow ? '5px' : '0px'});`
        });
    }, [boxShow])

    return(
        <main id="modulos">
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
                    modulos.length > 0 
                    ?
                    (
                        modulos.map( (e, i) => (
                            <div key={i} className="item" >
                                <button id={i} 
                                    onClick={ (el) => handleEditOrAdd("BOX_EDIT", e) } >editar</button>
                                <h1>{e.title}</h1>
                                <p>{e.describe}</p>
                                <ul 
                                    >
                                    
                                </ul>
                                <button >excluir</button>
                            </div>  
                        ))
                    )
                    : 
                    (
                        <span>Sem Modulos Cadastrado</span>
                    )
                }
                    <ButtonAdd onClick={(el) => handleEditOrAdd("BOX_ADD") }>add</ButtonAdd>
                </DivModulos>

            { boxShow ? 
                    <Box /> 
                : ""
            }
            </Container>
        </main>
    );
}