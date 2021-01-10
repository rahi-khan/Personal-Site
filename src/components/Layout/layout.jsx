import React from "react";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import { container, content } from "./layout.module.scss";

const Layout = ({ children }) => {
    return (
        <div className={container}>
            <Header />
            <div className={content}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
