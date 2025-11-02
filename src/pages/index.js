import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <Layout>
            <div className="container">
                <div className="w-100 my-5 text-center">
                    <div className="col-12 col-md-8 mx-auto">
                        <h1 className="display-1">Guia Foca Linux</h1>
                        <h2>Ensinando desde 1999</h2>
                        <p>
                            O GuiaFoca é um guia que traz desde explicações básicas sobre computadores e o sistema
                            GNU/Linux até a administração e segurança do sistema. Os assuntos do guia são explicados
                            em
                            linguagem clara e organizados de forma linear e didática, evitando termos técnicos nos
                            níveis iniciais, até que o usuário se habitue com sua utilização de forma gradual.
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-wrap text-center my-5">
                    <div className="col-12 col-md-6 p-2">
                        <div className="card rounded-3" style={ { minHeight: "30rem" } }>
                            <StaticImage
                                src="../images/capas/cards/img-card-inic.jpg"
                                alt="Capa do card iniciante"
                                className="rounded-top-3"
                                height={ 300 }
                            />
                            <div className="card-body">
                                <h5 className="card-title">Iniciante</h5>
                                <p className="card-text">
                                    Ideal para quem NUNCA usou o computador e resolveu adotar o GNU/Linux como seu
                                    sistema. A versão iniciante também desenvolvida para aqueles que já ultilizam outros
                                    sistemas operacionais (como Windows, OS/2, UNIX) e desejam ou, por simples
                                    curiosidade, testar o GNU/Linux.
                                </p>
                                <a href="/inic" className="btn btn-outline-primary mb-3">
                                    Acessar guia Iniciante<i className="bi bi-box-arrow-in-up-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <div className="card rounded-3" style={ { minHeight: "30rem" } }>
                            <StaticImage
                                src="../images/capas/cards/img-card-inter.jpg"
                                alt="Capa do card intermediário"
                                className="rounded-top-3"
                                height={ 300 }
                            />
                            <div className="card-body">
                                <h5 className="card-title">Intermediário</h5>
                                <p className="card-text">
                                    Mantém as características da versão iniciante e entra em assuntos de configuração do
                                    sistema, compilação, manutenção, configuração básicas de rede, interfaces,
                                    disposistivos, segurança etc. É uma versão do guia indicada para aqueles que desejam
                                    explorar mais a fundo o sistema GNU/Linux.
                                </p>
                                <a href="/interm" className="btn btn-outline-primary mb-3">
                                    Acessar guia Intermediário<i className="bi bi-box-arrow-in-up-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <div className="card rounded-3" style={ { minHeight: "30rem" } }>
                            <StaticImage
                                src="../images/capas/cards/img-card-avanc.jpg"
                                alt="Capa do card avançado"
                                className="rounded-top-3"
                                height={ 300 }
                            />
                            <div className="card-body">
                                <h5 className="card-title">Avançado</h5>
                                <p className="card-text">
                                    Escrita dando especial atenção ao foco de segurança, tendo como objetivo evitar
                                    acessos indevidos ao conteúdo da máquina, proteção com barreiras de segurança
                                    (autenticação, firewall restritivo, proxy, politicas de segurança de contas, etc.),
                                    análise de segurança da máquina, solução de vulnerabilidades etc...
                                </p>
                                <a href="/avanc" className="btn btn-outline-primary mb-3">
                                    Acessar guia Avançado<i className="bi bi-box-arrow-in-up-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <div className="card rounded-3" style={ { minHeight: "30rem" } }>
                            <StaticImage
                                src="../images/capas/cards/img-card-seg.jpg"
                                alt="Capa do card segurança"
                                className="rounded-top-3"
                                height={ 300 }
                            />
                            <div className="card-body">
                                <h5 className="card-title">Segurança</h5>
                                <p className="card-text">
                                    Esta versão especial do Guia Foca tem como objetivo ensionar técnicas relacionadas a
                                    segurança, permissões especiais, controle de acesso, modelos de segurança,
                                    criptografia, explicar como funcionam alguns ataques, politicas de segurança de
                                    contas, etc.), análise e rastreio de logs, detecção de vulnerabilidades, etc...
                                </p>
                                <a href="/segur" className="btn btn-outline-primary mb-3">
                                    Acessar guia Segurança<i className="bi bi-box-arrow-in-up-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Guia Foca Linux</title>;
