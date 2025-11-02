import * as React from "react";
import * as layoutStyles from "./layout.module.css";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <>
            <Header/>
            <main className={ layoutStyles.layout }>
                { children }
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
