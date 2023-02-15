
const inmueble = ["Inmueble", "Direccion","Telefono","Precio","Estado"]





document.getElementById("idinmueble").onmouseenter = function() {mouseEnter()};
document.getElementById("idinmueble").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
    document.getElementById("idinmueble")
}

function mouseLeave() {
    document.getElementById("idinmueble").style.color = "black";
}



