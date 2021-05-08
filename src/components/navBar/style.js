import styled from "styled-components";

export const NavBar = styled.ul`
    /* Código do Rodolfo */

    /*list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;*/

    /*li {
        &:hover { 
            border-bottom: 2px solid cyan;
        }
        padding-bottom: 15px;
        font-size: 20pt;
        margin-right: 100px;
    }*/

    /* pequenas modificações */
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;

    li {
        &:hover { 
            border-bottom: 2px solid cyan;
        }
        font-size: 20pt;
        margin: 0 40px;
    }
`;