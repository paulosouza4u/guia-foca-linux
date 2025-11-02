import * as React from "react";
import * as contentStyles from "./content.module.css";

const Content = ({ children }) => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <>
            <main className={ contentStyles.content }>
                <div className="container debug">
                    { children }
                </div>
            </main>
        </>
    );
};

export default Content;
