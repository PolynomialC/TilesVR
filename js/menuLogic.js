"use strict";
var navigateLogin = function() {
    $("#mainMenu").hide();
    $("#mainMenu-loginMenu").show();
    $("#mainMenu-navButtons").show();
};

var navigateRegister = function() {
    $("#mainMenu").hide();
    $("#mainMenu-registerMenu").show();  
    $("#mainMenu-navButtons").show();
};

var navigateMenu = function() {
    $("#mainMenu").show();
    $("#mainMenu-registerMenu").hide();
    $("#mainMenu-loginMenu").hide();  
    $("#mainMenu-navButtons").hide(); 
};