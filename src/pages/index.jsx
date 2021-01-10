import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { brand, brandImg } from "./pageStyles/index.module.scss";

const Home = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    author
                }
            }
            file {
                childImageSharp {
                    fixed(width: 125, height: 125) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    //! Render UI
    return (
        <Layout>
            <SEO title="Home" description="Home Page" />

            <div className={brand}>
                <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
                    <Img
                        fixed={data.file.childImageSharp.fixed}
                        alt="Gatsby Logo"
                        className={brandImg}
                    />
                </a>
                <h1>{data.site.siteMetadata.title}</h1>
                <h3>Good luck hacking!</h3>
            </div>
        </Layout>
    );
};

export default Home;
