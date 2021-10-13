
let elemento1 :any=document.getElementById("editar");
let elemento2 :any=document.getElementById("cruz");

elemento1.addEventListener("click",function abrirEditar()
{
    let elemento1 :any=document.getElementById("antecedentes");
    let elemento2 :any=document.getElementById("informacion");
    
    elemento2.hidden=false;
    elemento1.style.visibility = 'hidden';
});
elemento2.addEventListener("click",function abrirEditar()
{
    let elemento1 :any=document.getElementById("agregar");
    elemento1.hidden=false;
});