###Start Here 

1-> Try to create a simple heading element in html 
2-> Try to do the same with Javascript using document (in browser)
3-> Try the second step in node itself (JSDOM)
4-> Add React to your code via CDN, explore cross-origin in it, see the difference in production and development link 
5-> Explore that CDN link, visit that CDN link and see that code.



React.createElement("h1", {}, "Hello world from react!")
It is the functionality of React
ReactDOM.createRoot(document.getElementById("root"))
This is the functionality of ReactDOM, the actual DOM
root.render(heading)


{
    type: "h1", 
    props: {children: "Hello world from react!"}
}

render will take this virtual DOM, compare it with the REAL DOM and then updates it. 



const parent = React.createElement("div", {id: divId}, React.createElement("h1", {}, "Hi i am heading1))
const parent = React.createElement("div", {id: divId}, React.createElement(["h1", {}, "Hi i am heading1, "h2", {}, "Hi i am heading2"]))
