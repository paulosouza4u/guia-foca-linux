import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";

const IndexPage = () => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <>
            <Header/>
            <Content>
                ...
            </Content>
            <Footer/>
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Guia Foca Linux</title>;
