$(document).ready(function(){
    var box = document.getElementsByTagName('a-box');
    var y_cord, x_cord = 1;
    var max_x = '5', max_y = '5';
    var min_x = '1', min_y = '1';
    var aboveBox, belowBox, leftBox, rightBox;
    var cursor = document.getElementById('cursor');
    var nearbyBlocks = {};

    var moveBlock = function(currentBlock) {
        //Get current block color
        /*var currentBlockColor = this.getAttribute("color");
        //Work out where the empty block is
        for (var block in nearbyBlocks){
            if ( block[0].hasAttribute("empty") ) {
                block[0].setAttribute('color', currentBlockColor);
                block[0].removeAttribute("empty");
            }
        }*/

        this.setAttribute('color', '#88898c');
        highlightBlocks(nearbyBlocks, false);
        calculateNearbyBlocks(this);
       /* var oldBox = document.querySelectorAll('[y="' + ( parseInt(y_cord)) + '"][x="' + x_cord + '"]');

        //DEMO CODE REPLACE SOON
        if (this.getAttribute('active') === "true") {
            oldBox[0].setAttribute('color', '#1c1c1f');
        }
        else {
            oldBox[0].setAttribute('color', '#dfe0e6');
        }
        //DEMO CODE REPLACE SOON
        aboveBox[0].innerHTML = '';
        aboveBox[0].setAttribute('scale', '1');
        belowBox[0].innerHTML = '';
        belowBox[0].setAttribute('scale', '1');
        leftBox[0].innerHTML = '';
        leftBox[0].setAttribute('scale', '1');
        //highlightBlocks(this);*/

    };

    var calculateNearbyBlocks = function(currentBlock) {
        y_cord = currentBlock.getAttribute('y');
        x_cord = currentBlock.getAttribute('x');  

        if (y_cord !== max_y) {
            nearbyBlocks.aboveBox = document.querySelectorAll('[y="' + ( parseInt(y_cord)+1 ) + '"][x="' + x_cord + '"]');
        }
        if (y_cord !== min_y) {
            nearbyBlocks.belowBox = document.querySelectorAll('[y="' + ( parseInt(y_cord) - 1 ) + '"][x="' + x_cord + '"]');
        }   
        if (x_cord !== min_x) {
            nearbyBlocks.leftBox = document.querySelectorAll('[y="' + y_cord + '"][x="' + ( parseInt(x_cord) - 1 ) + '"]');
        }
        if (x_cord !== max_x) {
            nearbyBlocks.rightBox = document.querySelectorAll('[y="' + y_cord + '"][x="' + ( parseInt(x_cord) + 1 ) + '"]');
        }

        highlightBlocks(nearbyBlocks, true);                   
     };

    var highlightBlocks =  function(nearbyBlocks, status) {
        //If status == true highlight blocks, if false unhighlight blocks   
        for (var block in nearbyBlocks){
            if (status === true) {
                nearbyBlocks[block][0].classList.add('clickable');
                nearbyBlocks[block][0].innerHTML = '<a-animation dur="500" attribute="scale" direction="alternate-reverse" repeat="indefinite" to="1.15 1.15 1.15"></a-animation>';
            }
            else {
                nearbyBlocks[block][0].classList.remove('clickable');
                nearbyBlocks[block][0].innerHTML = '';               
            }
        }
            cursor.setAttribute('raycaster', 'objects: .clickable');
  
    };

    //SET BLOCK STATES
    for (var i = 0; i < box.length; i++) {
        //Add mouse listeners
        box[i].addEventListener('click', moveBlock, false);        

        if ( box[i].getAttribute('empty') === "true" ) {
            box[i].setAttribute('color', '#88898c');
            calculateNearbyBlocks(box[i]);
        }
        else if ( box[i].getAttribute('active') === "true" ) {
            box[i].setAttribute('color', '#1c1c1f');
        }
        else {
            box[i].setAttribute('color', '#dfe0e6');
        }
    }

    cursor.setAttribute('raycaster', 'objects: .clickable');
});