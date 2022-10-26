"use strict"

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canavs.getContext('2d');

let widht = context.canvas.width;
let height = context.canvas.height;

let randomX = Math.floor(Math.random() *widht);
let randomY = Math.floor(Math.random() *height);


let size = 200;

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let color = "rgb(" + r + "," + g + "," + b + ")";
console.log(r, g, b);

context.fillStyle = color;
context.fillRect(randomX, randomY, size, size);
