import styled from "styled-components";

export const BoxEdit = styled.div`
position: absolute;
top: 50%;
filter: blur(0) !important;
background: white;
display: flex;
padding: 50px;
min-width: 40%;
border: 1px solid #ddd;
border-radius: 10px;
justify-content: space-around;
align-items: center;

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    label {
        font-size: 15pt;
        font-weight: bold;
    }
    input {
        border: 0px;
        margin: 10px 0px;
        border-bottom: 2px solid #4287f5;
        padding: 15px 5px;
        outline: none;
        &::placeholder {
            color: #4287f5;
        }
    }
    
}

div.group-exers {
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 15px;

    div {
        background-color: #4287f5; 
        color: white;
        padding: 10px;
        border-radius: 10px ;
    }
}
`;

export const ListExercicio = styled.ul`
list-style: none;
border: 1px solid #ddd;
padding: 20px;
border-radius: 10px;

li {
    background-color: #4287f5;
    border-radius: 10px;
    padding: 10px;
    color: white;
    margin-top: 10px;
}
`;