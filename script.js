// Week 5 - Day 1 - Lecture - DOM

// Section1

// .PARENT ----------.child
//    |
//    |
//    '--------------.child

// Intro to the DOM

// Learning Objectives

// Students Will Be Able To:

//    Use DevTools to Explore the DOM
//    Select a Single element in the DOM
//    Select Multiple Elements in the DOM
//    Change the Content of an Element
//    Change the Style of an Element
//    Manipulate the Attributes of an Element
//    Manipulate the Classes of an Element
//    Iterate Over a Collection of Elements

// Roadmap

//    What's the DOM?
//    Setup
//    Using DevTools to Explore the DOM
//    Selecting DOM Elements
//    Select a single elemnet by its id
//    Select a single element using a CSS selector
//    Change the content of an element
//    Change the style of an element
//    Attributes of an element
//    Attributes of an element - Classes
//    Selecting multiple elements
//    Iterating over a collection of elements


// What's the DOM

// The DOM (Document Object Model) https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
// is the the in-memory representation of a browser's web document.

// It's a tree-like data structure with the top (root) being the
// document object.

// Let's type document in DevTool's console and explore some of
// its properties.

// What's the DOM

// The DOM's application programming interface (API) https://en.wikipedia.org/wiki/Application_programming_interface
// enables developers to make the UI dynamic using JavaScript to:

//    Add/remove elements to/from the document
//    Change the content of elements
//    Change the style properties of elements

// Setup

// Add a <script> tag to include script.js in the <head>:

// <head>
// ...
//   <title>DOM Practice</title>
//   <script defer src="js/script.js"></script>
// </head> */}

// let titleEl = document.getElementById('title');
// console.log(titleEl);
// console.dir(titleEl);
// console.log(document.querySelector('h1'))
console.log(document.querySelector('.main-title'))
console.log(document.querySelectorAll('.main-title')[1])
