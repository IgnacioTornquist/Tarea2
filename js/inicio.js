"use strict";
var elemento1 = document.getElementById("editar");
var elemento2 = document.getElementById("cruz");
elemento1.addEventListener("click", function abrirEditar() {
    var elemento1 = document.getElementById("antecedentes");
    var elemento2 = document.getElementById("informacion");
    elemento2.hidden = false;
    elemento1.style.visibility = 'hidden';
});
elemento2.addEventListener("click", function abrirEditar() {
    var elemento1 = document.getElementById("agregar");
    elemento1.hidden = false;
});
