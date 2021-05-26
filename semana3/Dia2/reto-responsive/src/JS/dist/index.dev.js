"use strict";

var body = document.getElementById("body");
var menu = document.getElementById("menu");

menu.onclick = function () {
  body.classList.toggle("open");
};

AOS.init();