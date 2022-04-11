import React from "react";

import "./animated-letters.scss";

interface Props {
    letterClass: string
    strArray: string[]
    idx: number
}

export function AnimatedLetters({letterClass, strArray, idx}: Props): JSX.Element {
    return (
        <span>
            {strArray.map((char, i) => (
                <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${char}${i}`}
                    className={`${letterClass} _${i + idx}`}
                >
                    {char}
                </span>
            ))}
        </span>
    );
}
