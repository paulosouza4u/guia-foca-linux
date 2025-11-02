import React from "react";
import Layout from "../components/layout";

const Guia = () => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <Layout>
            <div className="container">
                <div className="w-100 text-center my-5">

                    <div className="col-12 col-md-8 p-2 my-5 mx-auto">
                        <h1 className="display-1 mb-5">Sobre o GuiaFoca</h1>
                        <article className="mb-5">
                            <h2>O GuiaFoca</h2>
                            <p>
                                ...
                            </p>
                        </article>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Guia;

export const Head = () => <title>Guia | Guia Foca Linux</title>;
