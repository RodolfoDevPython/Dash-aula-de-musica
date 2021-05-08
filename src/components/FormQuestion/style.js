import styled from "styled-components";

export const Respostas = styled.textarea`
    padding: 5px;
    resize: none;
    height: 81px;
    margin-bottom: 15px;
    border-radius: 8px;
    outline: none;
    vertical-align: top;
    border: 2px solid ${ props => props.correct ? "#00bd00" : "#e60e0e" };
    
    &::placeholder {
        color: ${ props => props.correct ? "#00bd00" : "#e60e0e" }; 
    }

`;

export const ContainerSelectOptionModulo = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    label {
        margin-bottom: 10px;
        font-size: 30px;
    }

`