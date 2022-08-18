import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContainerSelectOptionModulo, Respostas } from "./style";

import api from "../../services/api";

export default function FormQuestion() {
    
    const { reduceModulo } = useSelector( state => state.chooseModulo );

    const [ selectModulos, setSelectModulos ] = useState([]);

    const  [ info, setInfo ] = useState({ exercicio: "", respostas: { correct: null, alter1: null, alter2: null, alter3: null } , modulo: selectModulos });

    const [ loading, setLoading ] = useState(false);

    useEffect( () => {
        async function fetchData() {
                
            const { data } = await api.get("/modulos");

            setSelectModulos(data.modulos);    

        }
        
        fetchData();
        
    }, []);

    useEffect( () => {
        console.log({
            loading
        });

        if (!loading) {
            setInfo({ exercicio: "", respostas: { correct: null, alter1: null, alter2: null, alter3: null } , modulo: selectModulos })
        }

    }, [loading])

    async function handleSave(event){

        event.preventDefault();

        setLoading(true);

        console.log(reduceModulo)

        const modulo = !reduceModulo ? { id : document.getElementById("select-modulo").value }  : reduceModulo

        const { status, data } = await api.post(`/modulo/${modulo.id}/exercicio`, {
            descricao: info.exercicio
        });

        if (status == 200) return;

        await api.post(`/exercicio/${data.exercicio.id}/resposta`, {
            descricao: info.respostas.correct,
            pontuacao: 10
        });

        await api.post(`/exercicio/${data.exercicio.id}/resposta`, {
            descricao: info.respostas.alter1,
            pontuacao: 0
        });

        await api.post(`/exercicio/${data.exercicio.id}/resposta`, {
            descricao: info.respostas.alter2,
            pontuacao: 0
        });

        await api.post(`/exercicio/${data.exercicio.id}/resposta`, {
            descricao: info.respostas.alter3,
            pontuacao: 0
        });

        // const respExercicios = await api.get('/modulo/13/exercicios');

        // setExercicios(respExercicios.data.docs);
        setLoading(false);
    }

    async function handleEdit(event) {

    }

    return (
        <>
            <ContainerSelectOptionModulo>

                <label>
                    { selectModulos.length > 0 && "Escolha um Módulo" }
                </label>

                <select id="select-modulo" onChange={ ({ target }) => console.log(target) }>
                    { 
                        selectModulos.length > 0 ?
                        (                            
                            selectModulos.map(
                                (e, i) => <option value={e.id} >{e.title}</option>
                            )
                        )
                        : 
                        ( <></>)
                    }
                </select>

            </ContainerSelectOptionModulo>

            <form onSubmit={handleSave}>
                <div className="question">
                    <h3>Pergunta:</h3>
                    <textarea 
                        placeholder="Formule uma pergunta"
                        onChange={ ({ target }) => setInfo({ ...info, exercicio: target.value }) }
                        required
                    ></textarea>
                </div>
                <div className="alternatives">
                    <h3>Alternativas:</h3>
                    <div className="a">
                        <label>A)</label>
                        <Respostas 
                            correct 
                            placeholder="Resposta correta" 
                            cols="30" rows="10"
                            onChange={ ({ target }) => setInfo({ ...info, respostas: { ...info.respostas, correct: target.value } }) }
                            required
                        ></Respostas>
                    </div>
                    <div className="b">
                        <label>B)</label>
                        <Respostas 
                            placeholder="Resposta incorreta" 
                            cols="30" rows="10"
                            onChange={ ({ target }) => setInfo({ ...info, respostas: { ...info.respostas, alter1: target.value } }) }
                            required
                        ></Respostas>
                    </div>
                    <div className="c">
                        <label>C)</label>
                        <Respostas 
                            cols="30" rows="10" 
                            placeholder="Resposta incorretas" 
                            onChange={ ({ target }) => setInfo({ ...info,  respostas: { ...info.respostas, alter2: target.value } }) }
                            required
                        ></Respostas>
                    </div>
                    <div className="d">
                        <label>D)</label>
                        <Respostas 
                            placeholder="Resposta incorretas" 
                            cols="30" rows="10"
                            onChange={ ({ target }) => setInfo({ ...info, respostas: { ...info.respostas, alter3: target.value } }) }
                            required
                        ></Respostas>
                    </div>
                    <button type="submit">
                        { !loading ? 'Salvar' : 'Salvando...' }
                    </button>
                </div>
                
            </form>
        </>       
    )
}