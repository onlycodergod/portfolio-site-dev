import React from "react";

import {Sidebar} from "@widgets/sidebar";

import "./layout.scss";

export function Layout(): JSX.Element {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;Golang&gt;</span>
                <span className="tags bottom-tags">
                    &lt;k8s&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;Docker&gt;</span>
                </span>
            </div>
        </div>
    );
}
