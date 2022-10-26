"user strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let widht = 600;
let height = 300;

drawnLines();

function drawLine() {
    let step = widht / horizontalLines;
    for (let i - 0; i < horizontalLines; i++){
        Utils.drawLine(0 +(step * i), 0, widht -(step * i), height );
    }
    for (let i = 0; i < verticalLines; i++)
        Utils.drawLine(0 + 10 * 1, 0, widht - 10 * 1, height);
    )
}