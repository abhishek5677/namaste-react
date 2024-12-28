import React from 'react'
import ReactDOM from 'react-dom/client'

// createRoot take 3 argumemts - tag, attributes(object) and children as an array
// const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!");


// jsx - html like syntax
// const jsxHeading = (
//     <h1 id='heading' className='class-heading' tabIndex={1}>
//         Namaste react using jsx
//     </h1>
// )

// React elememt
const Title = () => (
    <h1 id='heading' className='class-heading' tabIndex={1}>
        Namaste react using jsx
    </h1>
)

const HeadingComponent = () => {
    return (
        <div className="container">
            {Title()}
            {<Title />}
            {<Title></Title>}
            <h1 id='head'>Namaste react from functional component</h1>
        </div>
    )
}


const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", { id: "h1-tag" }, " react"),
                React.createElement("h2", { id: "h2-tag" }, "I am h2 tag")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", { id: "h1-tag" }, "I am h1 tag"),
                React.createElement("h2", { id: "h2-tag" }, "I am h2 tag")
            ]
        )

    ]
);
// console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(title);
root.render(<HeadingComponent />);