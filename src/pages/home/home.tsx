import React, {
    useEffect,
    useState,
} from "react";
import {Link} from "react-router-dom";
import Loader from "react-loaders";

import {AnimatedLetters} from "@shared/animated-letters";
import LogoTitle from "@public/assets/images/logo-s.png";

import {Logo} from "./components/logo";

import "./home.scss";

export function Home(): JSX.Element {
    const [letterClass, setLetterClass] = useState("text-animate");

    const nameArray = ["c", "o", "d", "e", "g", "o", "d"];
    const jobArray = [
        "b",
        "a",
        "c",
        "k",
        "d",
        "e",
        "v",
        "e",
        "l",
        "o",
        "p",
        "e",
        "r",
        ".",
    ];

    useEffect(() => {
        const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);

        clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>`m</span>
                        <img
                            src={LogoTitle}
                            alt="Golang Developer Boris, Backend Developer Boris"
                        />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Back End Developer / Docker lover / k8s user</h2>
                    <Link
                        to="/contact"
                        className="flat-button"
                    >
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>

            <Loader
                active
                type="pacman"
            />
        </>
    );
}
