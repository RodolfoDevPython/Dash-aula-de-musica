import React from "react";
import { ContainerHeader, Text, NavBar } from "./style";
import { useHistory } from "react-router-dom";

export default function Header() {

    return (
        <>
            <ContainerHeader>
                <Text>
                    dashboard
                    <span>aula de Música</span>
                </Text>
            </ContainerHeader>
        </>
    );

}