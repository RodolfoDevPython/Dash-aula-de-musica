import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 80px; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        padding: 50px;
        min-width: 100%;
        
        h2 {
            margin-bottom: 15px;
        }

        textarea {
            margin-bottom: 15px;
        }

        label {
            font-size: 13pt;
        }

        button {
            background: whiter;
            border: 1px solid #4287f5;
            color: #4287f5;
            height: 50px;
            border-radius: 10px;
            margin-top: 20px;
            &:hover {
                background: #4287f5;
                color: white;
            }
        }
    }
`;