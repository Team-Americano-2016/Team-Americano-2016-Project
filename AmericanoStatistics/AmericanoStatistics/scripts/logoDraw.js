/**
 * Created by Ivan on 8/11/2016.
 */

$(document).ready(function () {


var c = document.getElementById("siteLogo");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = '#557a79';
ctx.moveTo(165, 60);
ctx.lineTo(220, 40);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = '#69F0AE';
ctx.moveTo(220, 40);
ctx.lineTo(275, 60);
ctx.stroke();

/*ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = '#557a79';
ctx.moveTo(275, 60);
ctx.lineTo(275, 115);
ctx.stroke();*/

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = '#b8860b';
ctx.moveTo(275, 115);
ctx.lineTo(220, 135);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = '#7B1FA2';
ctx.moveTo(220, 135);
ctx.lineTo(165, 115);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = '#FFFF00';
ctx.moveTo(165, 115);
ctx.lineTo(165, 60);
ctx.stroke();

ctx.font = '28pt Arial';
ctx.lineWidth = 1
ctx.strokeStyle = 'black';
ctx.strokeText('Americano', 209, 100);
});