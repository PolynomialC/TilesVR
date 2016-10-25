$(document).ready(function(){
    var box = document.getElementsByTagName('a-box');
    var y_cord, x_cord = 1;
    var aboveBox, belowBox, leftBox, rightBox;

    var changeColor = function() {
        this.setAttribute('color', 'green');
        y_cord = this.getAttribute('y');
        x_cord = this.getAttribute('x');       

        var aboveBox = document.querySelectorAll('[y="' + ( parseInt(y_cord)+1 ) + '"][x="' + x_cord + '"]');
        aboveBox[0].setAttribute('color', 'red');

        var belowBox = document.querySelectorAll('[y="' + ( parseInt(y_cord) - 1 ) + '"][x="' + x_cord + '"]');
        belowBox[0].setAttribute('color', 'red');

        var leftBox = document.querySelectorAll('[y="' + y_cord + '"][x="' + ( parseInt(x_cord) - 1 ) + '"]');
        leftBox[0].setAttribute('color', 'red');

        var rightBox = document.querySelectorAll('[y="' + y_cord + '"][x="' + ( parseInt(x_cord) + 1 ) + '"]');
        rightBox[0].setAttribute('color', 'red');   
    };
    var returnColor = function() {
        this.setAttribute('color', '#4CC3D9');  
    };

    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseenter', changeColor, false);
        box[i].addEventListener('mouseleave', returnColor, false);
    }
});