"use strict";
let canvas =document.querySelector('canvas')
canvas.widht=window.innerWidth;
canvas.height=window.innerHeight;
let context = canvas.getContext("2d")

let widht = context.canvas.widht;
let height = context.canvas.height;

let margin = 50;
let spacing = 100;

drawnLines();

function drawnLines () {
    context.beginPath();

    context.moveTo(margin, 50);
    context.lineto(widht - margin, 50);
    context.lineTo(50, 150);
    context.lineTo(widht - margin, 150);
    context.lineTo(50, 250)
    context.lineTo(widht - margin, 150)
    context.lineTo(50,350)
    context.lineTo()
    context.lineTo()
    context.lineTo()
    context.lineTo()
}