import React from "react";
import { Link } from "gatsby";
import { header, active } from "./header.module.scss";

const Header = () => {
    return (
        <div className={header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/contact" activeClassName={active}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName={active}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" activeClassName={active}>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
