// Check what is the difference between git and github? 
// how does git works? How does github works? 
// Learn github and git inside out, what is private and public key there? What is ssh keys and all?

// what is bundling, chunking, code spliting in production? What's so special about production code?
// React alone does not make our code fast, there are a lot of other bundle which helps us in making our code run in the most efficient manner. 

// What is npm? what is it's full form? Is it node package manager?
// npm is everything but not a node package manager. (try clicking on the header of it)
// it does work as node mangaer but it does not stand for node package manger. 
// Now we have to configure our package manager. 
// Just do npm init (i know that npm init -y will save many of your steps by setting npm with defualt parameters, but learn with npm init)
// what is jest? What are test cases in npm? 
// you will see a package.json there, what is it? What does it do? 
// basically whenever we are writing code we need to have a lot of dependencies (our code is dependent on other code) and the package.json file manages thsoe dependencies. 
// it checks for their versions and compatibility with each other. 
// There are two types of dependencies, one is dev dependency and the other one is normal dependency. 
// what does caret and tilde means in package manager?
// what does those three dots in the version means? 
// what does package-lock.json means? Why do we need it separately? does it help in production or what?
// how does node package knows what are all the dependencies to install? 
// what is dependencies tree?
// how does git ignore works? How to put files there? 
// do we have to put node_modules to git? why not? 
// can we recover it from package.json?


// what are bundlers? (webpack, vite, parcel) what is the job of a bundler? how does it achieve what it tries to do? 
// what is parcel in node modules? what is babel in node modules?

// we should not fetch react from CDN links, but why? What is the problem in doing so? 
// There are two major reasons for it, the first one we have to make a network call each time we are using it 
// the second reason is suppose if a new version of react comes in tomorrow then we will have to update the link manually, (won't this will also be a problem in package managers?)
// does package managers get the latest version? 
// So how can we use react in our project? What is the other way of doing this? 
// we can install react via node package manager.. 
// so write these two commands -> npm i react, npm i react-dom
// (how does these 150% volume extension works? What does they mean?)
// after installing react and react-dom we removed the cdn links and tried running the same code by importing and exporting scripts, but this will throw an error. 
// what is that error? What does that means? 
// the error is because it is treating it like a normal javascript file, but is it a normal js file? No ryt!
// we need to declare a type as module there to tell it explicitly that we are have a module not a normal js file. So write type="module" and now it will work with import and export in script.js file. 
// what is the difference in importing reactDom from react and from react/client? 
// Now we are sucessfully running react on our browser. 

// Now as soon as you will make some changes in your DOM it would be showed on your page without even refreshing the page. How? 
// It is because of parcel, it's responsible for Dev build, Local server, automatically updating the page (DOM tree), it is doing something names as HMR, what is HMR? 
// It also have something as file watching algorithm, read about it. It's build in c++
// what is parcel cache? How does it do this? 
// what is consistent hashing in parcel? What is code spliting in parcel? what is differential bundling? How does parcel do all this? 
// what is reliable caching? what does multi core means? What does Tree shaking means? 
// Read parcel documentation

// How can be build our project to production? via npx parcel build index.html
// but this will throw an error of main, what is it? 
// while bundling our code for production we have to remove the main (entry point) from package.json. 
// (Like rust and c++ have a entry point function and js does not have it, but does js already define the first file to run in package.json?)
// that npx is for execution 
// when we do npx parcel index.html it created a dist for our local code. 
// but now we want to build for production level so we have to remove our already existing dist folder and build it again. 
// so we will be doing npx parcel build index.html and this will generate a new dist folder
// it will take more time than what development mode took. Because it's a production level build.
// Because production build takes time, it compresses all the code. It will compress all the of your code files to these 3 files (index.html, style.css, script.js) and these three files will contain all of your code. 
// how does voice got into computer and come out of computers? how does voice gets encoded?
// Now we have ingnited our app. 
// But now let's make our app comatible with older version of browser...
// How can we do so? We can do so by using browserList... what is browserlist? How does it work?
// you have to tell your project that what does all the browser it needs to support? 
// we need to add that in package.json file, cover last x versions (go to browserlist.dev), you can also put location specific filters there. 
// what is the difference in react and bundler? What different jobs are they doing? 