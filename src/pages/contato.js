import React from "react";
import Layout from "../components/layout";
import iconPng from "../images/icon.png";

const Contato = () => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <Layout>
            <div className="debug">
                Contato
            </div>
        </Layout>
    );
};

export default Contato;

export const Head = () => (
    <>
        <title>Contato | Guia Foca Linux</title>
        <link rel="icon" href={ iconPng } type="image/png"/>
        <link rel="apple-touch-icon" href={ iconPng }/>
    </>
);