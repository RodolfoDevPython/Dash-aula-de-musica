import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 3rem;
    background-color: #4287f5;
    border-radius: 5px;
    margin-bottom: 3rem;
`

export const List = styled.ul`
    display: flex; 
    flex-direction: column;
    list-style: none;
`

export const InfoCart = styled.li`
    display: flex; 
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
    position: relative;
`

export const NameExercicies = styled.h4`
    font-size: 1.4rem;
`

export const NameExerciciesEdit = styled.input`
    font-size: 1.4rem;
    border: 2px solid ${props => props.inputColor || '#4287f5' };
    border-radius: 4px;
    margin-right: 2rem;
    padding: 5px 10px;
    display: ${props => props.show == true ? 'flex' : 'none' };
    width: 300px;
    animation: 1s loopBorderColor infinite;


    @keyframes loopBorderColor {

        from { 
            border-color: #fff;
        }

    }
`

export const DescribeExercicies = styled.h6`
    font-size: 1rem;
`

export const ContainerAnswer = styled.div`
    margin: 1rem 0;
    display: flex;
`

export const Answer = styled.label`
    border: 2px solid ${props => props.inputColor || '#4287f5' };
    border-radius: 4px;
    margin-right: 2rem;
    padding: 5px 10px;
`

export const AnswerEdit = styled.input`
    border: 2px solid ${props => props.inputColor || '#4287f5' };
    border-radius: 4px;
    margin-right: 2rem;
    padding: 5px 10px;
    display: ${props => props.show == true ? 'flex' : 'none' };
    width: 200px;
    animation: 1s loopBorderColor infinite;


    @keyframes loopBorderColor {

        from { 
            border-color: #fff;
        }

    }

`

export const ContainerButtons = styled.div`
    display: flex;
`

export const ButtonEdit = styled.button`
    background: yellow;
    border: 1px solid transparent;
    color: #212121;
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease-in-out .3s;

    &:hover {
        background: #212121;
        color: yellow;
        font-weight: 500;
    }

`
export const ButtonDelete = styled.button`
    color: #fff;
    position: absolute;
    right: 1rem;
    top: 35%;
    border: 0px solid transparent;
    background-color: transparent;
    cursor: pointer;

    img {
        max-width: 35px;
        opacity: 0.5;
        transition: all ease-in-out 400ms;

        &:hover {
            opacity: 1;
            filter: drop-shadow(1px 3px 2px rgba(0,0,0, 0.5));
        }
    }
`

export const ContainerEmpty = styled.div `
    background-color: #fff;
    border-radius: 8px;
    padding: 2rem;

    p {
        color: #4287f5;
        margin-bottom: 2rem;
    }

    button {
        border: 1px solid #000; 
        border-radius: 5px;
        padding: .5rem;
        cursor: pointer;
    }

`;