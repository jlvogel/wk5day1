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

let titleEl = document.getElementById('title');
// console.log(titleEl);
// console.dir(titleEl);
// console.log(document.querySelector('h1'))
// console.log(document.querySelector('.main-title'))
// console.log(document.querySelectorAll('.main-title')[1])

let pEl = document.querySelector('.cool')
// console.log(pE1)
// console.dir(pE1)

// console.log([1,2])
// console.dir([1,2])

// try to better understand the difference between console.log
// and console.dir in the browser console (currently using chrome)

// pE1.innerHTML = '<strong>Today</strong>'
// pE1.textContent = '<strong>Today</strong>'

console.dir(pEl.style)

titleEl.style.textAlign = 'center'

pEl.style.color = 'green'

console.dir(pEl.style)

console.log(document.querySelector('a').hasAttribute("href"))
console.log(document.querySelector('a').getAttribute('href'))
document.querySelector('a').setAttribute('href', 'https://www.amazon.com')
console.dir(document.querySelector('h1').classList.contains('main-title'))

console.dir(document.getElementsByTagName('li'))
console.log(document.getElementsByTagName('li'))

console.dir(document.getElementsByClassName('comment'))
console.log(document.getElementsByClassName('comment'))

commentEls = document.querySelectorAll('.comment')
console.log(commentEls)

for(let commentEl of commentEls) {
  console.log(commentEl)
}

for(let commentEl of commentEls) {
  console.log(commentEl)
  commentEl.style.fontSize = '30px'
}

commentEls.forEach((commentEl, index) => {
  index+=2
  commentEl.style.fontSize = `${index*10}px`
})