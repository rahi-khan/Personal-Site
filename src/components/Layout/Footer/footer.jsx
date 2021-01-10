import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { footer } from "./footer.module.scss";

const Footer = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <div className={footer}>
            <h4>
                Created by{" "}
                <a href="https://twitter.com/rahikhan_dev">{data.site.siteMetadata.author}</a>
            </h4>
        </div>
    );
};

export default Footer;
