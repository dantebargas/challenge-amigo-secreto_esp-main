// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    // Ocultar la lista de nombres
    document.getElementById("listaAmigos").style.display = "none";
    
    // Mostrar solo el nombre sorteado
    document.getElementById("resultado").innerHTML = `<h2>🎉 Tu Amigo Secreto es: <strong>${amigoSecreto}</strong> 🎉</h2>`;
}

/* 
    Espacio para opiniones de desarrolladores:
    ------------------------------------------------------------
    -
    ------------------------------------------------------------
*/
