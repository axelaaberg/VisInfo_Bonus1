//Definimos cual es el punto que queremos mover
const retina = document.querySelectorAll(".eye-retina");


//Evento movimiento del mouse 

window.addEventListener("mousemove", (e) => {
  console.log("El mouse está dentro de la ventana")
  
});


//Evento click encima de la figura (Gigi)

document.querySelector('.gigi').addEventListener('click', function() {
  console.log("La figura fue apretada")
  
});

//Función para obtener un color aleatorio

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Evento click en botón 

document.querySelector('.button').addEventListener('click', function() {
  console.log("Se presionó el botón")

  let ribbonColor = getRandomColor();

  document.querySelector("#ribbon-middle").style.background = ribbonColor;
  document.querySelector("#ribbon-left").style.borderLeftColor = ribbonColor;
  document.querySelector("#ribbon-right").style.borderRightColor = ribbonColor;


  
});    