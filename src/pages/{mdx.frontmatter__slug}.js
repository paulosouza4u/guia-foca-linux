import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import iconPng from "../images/icon.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Guia = ({ data, children }) => {

    const image = getImage(data.mdx.frontmatter.image);

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <Layout>
            <div className="container">
                <GatsbyImage
                    image={ image }
                    alt={ data.mdx.frontmatter.image_alt }
                />
                <div className="w-100 text-center my-5">
                    <div className="col-12 col-md-8 p-2 my-5 mx-auto">
                        <article>
                            <h1 className="display-6 mb-5">{ data.mdx.frontmatter.title }</h1>
                            { children }
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Guia;

export const Head = ({ data }) => (
    <>
        <title>{ data?.mdx?.frontmatter?.subtitle } | Guia Foca Linux</title>
        <link rel="icon" href={ iconPng } type="image/png"/>
        <link rel="apple-touch-icon" href={ iconPng }/>
    </>
);

export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                slug
                title
                subtitle
                image_alt
                image {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`;
