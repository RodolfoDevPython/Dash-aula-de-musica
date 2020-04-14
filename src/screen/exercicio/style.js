import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 100px; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        justify-content: space-evenly;
        padding: 43px;
        min-width: 100%;

        label {
            font-size: 13pt;
            padding: 10px;
            
        }

        textarea {
            padding: 5px;
            resize: none;
            height: 81px;
            margin-bottom: 15px;
            border: 1px solid black;
            border-radius: 8px;
            outline: none;
            vertical-align: top;
        }

        .question {
            h3 {
                margin-bottom: 10px;
                text-align: center;
            }

            textarea {
                margin: 0;
                width: 460px;
                height: 300px;
            }
        }

        .alternatives {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;

            h3 {
                grid-area: 1 / 2 span;
                justify-self: center;
            }

            button {
                width: 400px;
                background: #4287f5;
                border: 1px solid #4287f5;
                color: #4287f5;
                height: 50px;
                border-radius: 10px;
                margin-top: 20px;
                color: white;
                font-size: 25px;
                font-weight: bold;
                grid-area: 4 / 2 span;
                justify-self: center;
                &:hover {
                    background: white;
                    color: black;
                }
            }
        }
    }
`;