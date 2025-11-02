import React from "react";
import Layout from "../components/layout";

const Sobre = () => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <Layout>
            <div className="debug">
                Sobre
            </div>
        </Layout>
    );
};

export default Sobre;

export const Head = () => <title>Sobre | Guia Foca Linux</title>;
