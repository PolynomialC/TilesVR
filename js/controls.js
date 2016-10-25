$(document).ready(function(){
    var box = document.getElementsByTagName('a-box');
    var y_cord, x_cord = 1;

    var changeColor = function() {
        this.setAttribute('color', 'green');
        y_cord = this.getAttribute('y');
        x_cord = this.getAttribute('x');
        console.log(document.querySelectorAll('[y="' + y_cord + '"][x="' + x_cord + '"]'));
    };
    var returnColor = function() {
        this.setAttribute('color', '#4CC3D9');  
    };

    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseenter', changeColor, false);
        box[i].addEventListener('mouseleave', returnColor, false);
    }
});