//Definimos cual es el punto que queremos mover
const retina = document.querySelectorAll(".eye-retina");


//Evento movimiento del mouse 
window.addEventListener("mousemove", (e) => {
  console.log("El mouse está dentro de la ventana")

  //Posicion del mouse
  const { pageX, pageY } = e;

  //Tamaño de la pantalla
  const { innerWidth, innerHeight } = window;

  let left = (pageX / innerWidth) * 100;
  let top = (pageY / innerHeight) * 100;

  //limites para que no salga la retina de los ojos
    left = left < 10 ? 10 : left;
    left = left > 90 ? 90 : left;
    top = top < 10 ? 10 : top;
    top = top > 90 ? 90 : top;

  //movimiento de los ojos, se actualiza constantemente
  retina.forEach((f) => {
    f.style.left = `${left}%`;
    f.style.top = `${top}%`;
  });

});


/* //Evento click encima de la figura (Gigi)

document.querySelector('.gigi').addEventListener('click', function() {
  console.log("La figura fue apretada")
  
}); */


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