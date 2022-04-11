import React from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faUser,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import LogoSubtitle from "@public/assets/images/logo_sub.png";
import LogoS from "@public/assets/images/logo-s.png";

import "./sidebar.scss";

export function Sidebar(): JSX.Element {
    return (
        <div className="nav-bar">
            <Link
                className="logo"
                to="/"
            >
                <img
                    src={LogoS}
                    alt="Logo"
                />
                <img
                    className="sub-logo"
                    src={LogoSubtitle}
                    alt="onlycodergod"
                />
            </Link>
            <nav>
                <NavLink
                    exact
                    activeClassName="active"
                    to="/"
                >
                    <FontAwesomeIcon
                        icon={faHome}
                        color="#4d4d4e"
                    />
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon
                        icon={faUser}
                        color="#4d4d4e"
                    />
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        color="#4d4d4e"
                    />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/gocoding/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/onlycodergod"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UCuQ2m5d33SRYqjNyueM2cWw"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faYoutube}
                            color="#4d4d4e"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="skype:live:.cid.ca976354b7824451"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faSkype}
                            color="#4d4d4e"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}
