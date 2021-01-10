import React from "react";
import { Link } from "gatsby";
import { errorHeader } from "./pageStyles/notFound.module.scss";
import Layout from "../components/Layout/layout";

const NotFound = () => (
    <Layout>
        <div className={errorHeader}>
            <h1>
                Page Not Found{" "}
                <span role="img" aria-label="sad emoji">
                    😢
                </span>
            </h1>

            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    </Layout>
);

export default NotFound;
