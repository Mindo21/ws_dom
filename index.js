/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP879244";
    // e.g. return "UP654321";
}

function fn() {
    return "Matus";
}

function sn() {
    return "Minarovic";
}

// add your functions here

function replaceText(element, str){
    element.textContent = str;
}

function addTextTo(element, str){
    element.textContent += str;
}

function moreBears(){
    window.animals.src = 'http://placebear.com/400/200';
    window.animals.alt = 'A bear.';
    window.animals.title = 'A BEAR!';
}

function setId(element, str){
    element.id = str;
    return element;
}

function setClass(element, str){
    element.className = str;
    return element;
}

function addAClass(element, str){
    element.classList.add(str);
    return element;
}

function removeAClass(element, str){
    element.classList.remove(str);
    return element;
}

function newElement(name){
    const element = document.createElement(name);
    return element;
}

function findElementById(id){
    return document.getElementById(id);
}

function findElementsByQuery(query){
    return document.querySelectorAll(query);
}

function reverseList(selector){
    const list = document.querySelector(selector);
    let arr = Array.from(list.getElementsByTagName('li'));
    arr.reverse();
    arr.forEach((item) => list.appendChild(item));
    return list;
}

//Create a function `mover` that accepts two parameters, the first is a selector
//for the element to move, the second is a selector for the element that it
//should be appended to.
function mover(elementToMove, elementToBeAppendedTo){
    const moved = document.querySelector(elementToMove);
    const appendedTo = document.querySelector(elementToBeAppendedTo);
    appendedTo.appendChild(moved);
}

/*Write a function `filler` that accepts two parameters, the first is a list
element that should be added to, the second is an array of strings that will
be turned into list items.*/
function filler(list, strArr){
    strArr.forEach((str) => {
      const li = document.createElement("li");
      li.textContent = str;
      list.appendChild(li);
    });
}

/*Write a function `dupe` that accepts one parameter, a selector.  The function
should duplicate the element chosen by the selector (and any children of it)
inside its parent.*/
function dupe(selector){
    const element = document.querySelector(selector);
    const duplicatedElement = element.cloneNode(true);
    element.parentElement.appendChild(duplicatedElement);
}

/*Write a function `removeAll` that accepts one parameter, a selector.
All nodes that match that selector should be removed.*/
function removeAll(selector){
    document.querySelectorAll(selector).forEach((node) => node.remove());
    // nodeList.forEach() -> and then node.remove()
}

/*Write a function `getUserData` that returns an object with information from
the #username, #speed, #student form input fields. The result should be an
object like this: { name: 'john', speed: 30, student: true }.*/
function getUserData(){
    let name = document.querySelector("#username").value;
    let speed = parseInt(document.querySelector("#speed").value);
    let student = document.querySelector("#student").checked;
    let userData = {
        "name": name,
        "speed": speed,
        "student": student,
    }
    return userData;
}
