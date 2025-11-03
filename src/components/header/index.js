import * as React from "react";
import * as headerStyles from "./header.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx (sort: { frontmatter: { slug: ASC } }) {
                nodes {
                    frontmatter {
                        title
                        subtitle
                        slug
                    }
                }
            }
        }
    `);
    const guias = data.allMdx.nodes;

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <>
            <header className={ headerStyles.header }>
                <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                    <div className="container">
                        <a className="navbar-brand fw-bold" href="/">Guia Foca Linux</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Início</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Guias
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to={ `/${guias[0].frontmatter.slug}` }
                                                  className="nav-link">Iniciante</Link>
                                        </li>
                                        <li>
                                            <Link to={ `/${guias[1].frontmatter.slug}` }
                                                  className="nav-link">intermediário</Link>
                                        </li>
                                        <li>
                                            <Link to={ `/${guias[2].frontmatter.slug}` }
                                                  className="nav-link">Avançado</Link>
                                        </li>
                                        <li>
                                            <Link to={ `/${guias[3].frontmatter.slug}` }
                                                  className="nav-link">Segurança</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sobre" className="nav-link">Sobre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contato" className="nav-link">Contato</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <fieldset className="d-flex" disabled>
                                    <input className="form-control me-2" type="search" placeholder="Buscar"
                                           aria-label="Buscar"/>
                                    <button className="d-flex btn btn-outline-primary" type="submit">
                                        Buscar<i className="bi bi-search ms-2"></i>
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
