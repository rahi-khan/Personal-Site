import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

import { contactHeader } from "./pageStyles/contact.module.scss";

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" description="Contact Page" />

            <div className={contactHeader}>
                <h1>Get in touch</h1>

                <ul>
                    <li>
                        <a href="https://twitter.com/rahikhan_dev">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_rahikhan_/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rahikhan/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/rahi-khan">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default Contact;
