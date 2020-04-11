import styled from "styled-components";

export const NavBar = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;

    li {
        &:hover { 
            border-bottom: 2px solid cyan;
        }
        padding-bottom: 15px;
        font-size: 20pt;
        margin-right: 100px;
    }

`;