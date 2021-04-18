import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 3rem 3rem 1rem 3rem;
    background-color: #4287f5;
    border-radius: 5px;
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
`

export const NameExercicies = styled.h4`
    font-size: 1.4rem;
`

export const DescribeExercicies = styled.h6`
    font-size: 1rem;
`

export const ContainerAnswer = styled.div`
    margin: 1rem 0;
`

export const Answer = styled.label`
    border: 2px solid #4287f5;
    border-radius: 4px;
    margin-right: 2rem;
    padding: 5px 10px;
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
    background: red;
    border: 1px solid transparent;
    color: #fff;
`