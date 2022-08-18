import styled from "styled-components";
import { devices } from "../../utils/styleGlobal";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem 10%; 
    flex-direction: column;
    position: relative;
`;

export const Input = styled.input.attrs( props => ({
    type: "text",
    placeholder: props.placeholder
}))`
    &::placeholder {
        color: #4287f5;
    }
    padding: 20px 80px 20px 40px;
    border: 0px ;
    border-bottom: 2px solid #4287f5;
    outline: none;
    background-image: url("https://img.icons8.com/color/48/000000/search.png");
    background-repeat:no-repeat;
    background-position-x: 100%;
`;

export const DivModulos = styled.div`
    display: grid;
    background-color: #4287f5;
    border-radius: 10px;
    padding: 50px;
    width: 90%;
    grid-template-columns: repeat(4 , 1fr);
    gap: 50px;
    position: relative;

    @media ${devices.mobile} { 
        grid-template-columns: repeat(2 , 1fr);
        width: fit-content;
    }


    .item { 
        background-color: white;
        border-radius: 5px;
        padding: 25px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ul { 
            list-style: none; 
            li {
                font-size: 15pt;
            }
        }

        p {
            margin-top: 10px;
            font-size: 1rem;
            text-align: center;
        }

        button {
            margin-left: 100%;
            border-radius: 5px;
            padding: 10px;
            text-transform: uppercase;
            background: transparent;
            color: #CC4125;
            border: 2px dashed #CC4125;

            &:hover {
                cursor: pointer;
            }

            &:first-child {
                color: yellow;
                border: 2px dashed yellow;
                
                &:hover {
                    background-color: yellow;
                    color: black;
                    border: none;
                }
            }

            &:hover {
                background-color: #CC4125;
                color: white;
                border: none;
            }

        }

    }
`;
export const ButtonAdd = styled.button`
    background: green;  
    border: none;
    position: absolute;
    top: -40px;
    right: -40px;
    padding: 20px;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
    }
`;

export const ButtonViewQuestion = styled.a`
    color: #fff;
    border-bottom: 2px solid transparent;
    font-size: 1rem;
    cursor: pointer;
    background: #4287f5;
    padding: 0.5rem;
    border-radius: 8px;
    font-weight: 500;
    margin-top: 1rem;

    &:hover {
        font-weight: 600;
        border-bottom-color: #4287f5;
    }
`;