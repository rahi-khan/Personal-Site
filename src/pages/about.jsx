import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";
import gatsbyGif from "../images/gatsby.gif";
import { aboutHeader } from "./pageStyles/about.module.scss";

const About = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            allAboutDataJson {
                edges {
                    node {
                        name
                        url
                    }
                }
            }
        }
    `);

    //! Render UI
    return (
        <Layout>
            <SEO title="About" description="About Page" />

            <div className={aboutHeader}>
                <img src={gatsbyGif} alt="Gatsby GIF" />

                <ol>
                    {data.allAboutDataJson.edges.map(({ node }) => (
                        <li>
                            <a href={node.url} target="_blank" rel="noreferrer">
                                {node.name}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </Layout>
    );
};
export default About;
