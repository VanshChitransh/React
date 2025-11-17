/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hi 1nsh</h1>
 *      </div>
 * </div>
 * 
 * 
 */

// const parent = React.createElement("div",
//     {id: "parent"},
//     React.createElement("div",
//     {id: "child"},
//     React.createElement("h1",
//     {},
//     "Hi 1nsh"
// )))

// const root = ReactDOM.createRoot(document.getElementById('id'))
// root.render(parent)



/**
 * What if we want to have siblings in DOM? 
 * <div id="parent"> 
 *      <div id="child"> 
 *          <h1>Hi 1nsh</h1>
 *          <h1>Hi There</h1>
 *      </div>
 * </div>
 */


const p = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'},
        [React.createElement('h1', {}, 'Hi 1nsh'), React.createElement('h1', {}, 'Hi There')]
    )
)
// we can even pass and array as the third argument
const root = ReactDOM.createRoot(document.getElementById('id'))
root.render(p);
// you will se an error or key on the console, but ignore it for now.
// what will happen if we already have something in the id div? 
// will it be replaced or replaced? 


// react is a library not a framework. 
// it can work even in header, footer, sidebar











/**
 * 
 * First i will write how do we write "Hello world" in html
 * Then i will write how can we write "Hello World" in javascript, there i will also write the code part (createElement, appendChild, innerHtml)
 * Then i will write about those two links from CDN (what is CDN, cross-origin, development mode)
 * When react was build it was build on the foundation that "DOM manipulation is the most expensive action in the browser"
 * What happens when we write React and ReactDOM in the console. 
 * Also write the difference between , and + in the conosle.log part. 
 * Then we will start with the react example part 
 * React.createElement(filed, attribute, value)
 * write about each and every parameter of this function. 
 * (const heading = React.createElement(..., ..., ...)), what will be the output of (console.log(heading)?  -> It's an object)
 * This heading will be the object and it will have a field called props 
 * Then we have to create a root, but why? why can't we directly put things into html page without root? 
 * then what is root.render(heading)?
 * Then take the example of nested DOM, how we pass multiple values in array, 
 * What will happen if we will already have something in the id div? 
 * will it be replaced or it will be added? 
 * React is a library, not a framework. It can work even in small things like header, footer, sidebar.
 * 
 */