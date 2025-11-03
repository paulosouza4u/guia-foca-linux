import React from "react";
import Layout from "../components/layout";
import iconPng from "../images/icon.png";

const Contato = () => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <Layout>
            <div className="container">
                <div className="w-100 text-center my-5">
                    <h1 className="display-1 mb-5">Contato</h1>
                    <h4>Em breve retornamos sua mensagem.</h4>
                    <form name="contact" method="POST" data-netlify="true" onSubmit={ (event) => {
                        event.preventDefault();
                        //alert("Mensagem enviada com sucesso!");
                    } }
                          className="card w-25 mx-auto my-5 border border-primary py-5 px-3 rounded">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"><span
                                className="text-danger me-1">*</span>Nome:</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                                   name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mail" className="form-label"><span
                                className="text-danger me-1">*</span>Email:</label>
                            <input type="email" className="form-control" id="mail" aria-describedby="emailHelp"
                                   name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textarea" className="form-label"><span className="text-danger me-1">*</span>Mensagem:</label>
                            <textarea className="form-control" id="textarea" rows="3" name="message"
                                      required></textarea>
                        </div>
                        <span><small><span className="text-danger me-1">*</span>Campo obrigatório.</small></span>
                        <hr/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
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