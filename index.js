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
