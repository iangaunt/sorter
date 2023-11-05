import React from "react";

function Side(props: {side: string}) {
    return (
        <div id={props.side + "-itm"}>
            <h1 id={props.side + "-txt"}></h1>
        </div>
    )
}

function Image(props: {side: string}) {
    return (
        <div id={props.side + "-i"}>
            <img id={props.side + "-img"} src=""></img>
        </div>
    )
}

function Panel() {
    return (
        <nav className="panel">
            <div className="buttons">
                <h1 id="sorted-count">Sorted: 0/0</h1>
                <button id="sort-left"><span>←</span> Left</button>
                <button id="sort-right">Right <span>→</span></button>
                <button id="sort-tie"><span>←</span> Tie <span>→</span></button>
                <button id="sort-reset">Undo</button>
            </div>
        </nav>
    )
}

function Sorter() {
    return (
        <>
            <section className="images">
                <Image side="left" />
                <div className="padding"></div>
                <Image side="right" />
            </section>
            <section className="sorter">
                <Side side="left" />
                    <Panel />
                <Side side="right" />
            </section>
        </>
    )
}

export default Sorter;