import React from "react";
import Layout from "../components/layout";

const Sobre = () => {

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
                                O Foca GNU/Linux é um guia que traz desde explicações básicas sobre computadores e o
                                sistema GNU/Linux até a administração e segurança do sistema. Os assuntos do guia são
                                explicados em linguagem clara e organizados de forma linear e didática, evitando termos
                                técnicos nos níveis iniciais, até que o usuário se habitue com sua utilização de forma
                                gradual. Isto faz o guia indispensável para o usuário GNU/Linux iniciante ou os mais
                                curiosos. Todas as seções do guia Foca GNU/Linux tem exemplos para melhor compreensão do
                                assunto explicado e links dinâmicos que te levam facilmente a assuntos relacionados (na
                                versão online, HTML, e-book e PDF). Veja também os níveis (Iniciante, Intermediário e
                                Avançado). Para receber por e-mail a notificação de novas versões, lançamento de novos
                                capítulos, etc. assine os avisos de atualização, preenchendo o formulário a direita
                                desta página ou siga-nos no Twitter @focalinux (clicando no link abaixo)
                            </p>
                        </article>
                        <article className="">
                            <h3>O Autor</h3>
                            <h4>Gleydson Maziolli</h4>
                            <p>
                                Gleydson Mazioli é especialista em Linux, com foco em automatização, alta performance,
                                alta disponibilidade e integração de ambientes é capixaba e trabalha há mais de 14 anos
                                com Linux. Desde de 2000 é desenvolvedor oficial da distribuição Debian , foi
                                responsável pela primeira tradução do sistema para português e trabalhou em vários
                                outros projetos de software livre como o The Linux Document Project , Amanda , Mailman ,
                                Squirrelmail , CIPSGA , Caetect , etc. Possui as certificação nível 3 da LPI e nos anos
                                de 2003 e 2006 ficou em primeiro lugar no ranking de administradores Linux do Brainbench
                                , o que o levou também ao posto de 15º no mundo. Especialista em tecnologias de
                                virtualização, segurança, automatização, integração, alta performance/disponibilidade,
                                Gleydson é hoje sócio e gerente de tecnologia da empresa Spirit Linux .
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Sobre;

export const Head = () => <title>Sobre | Guia Foca Linux</title>;
