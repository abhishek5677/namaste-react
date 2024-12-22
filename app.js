// createRoot take 3 argumemts - tag, attributes(object) and children as an array
const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!");

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", { id: "h1-tag" }, "I am h1 tag"),
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
console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);