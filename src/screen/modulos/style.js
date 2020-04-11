import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10%; 
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

    .item { 
        background-color: white;
        border-radius: 5px;
        padding: 25px 0px;
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
        button {
            margin-left: 100%;
            border-radius: 5px;
            padding: 10px;
            text-transform: uppercase;
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
            color: #CC4125;
            border: 2px dashed #CC4125;
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