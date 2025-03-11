// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let yaSorteado = false; // Variable para controlar si el sorteo ya ocurrió

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar el campo

    actualizarLista(); // Llamamos a la función que actualiza la lista
    yaSorteado = false; // Se permite un nuevo sorteo
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar antes de volver a mostrar

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { // Verifica que haya al menos 2 nombres
        alert("Debe agregar al menos dos amigos antes de sortear.");
        return;
    }

    if (yaSorteado) { // Si ya se sorteó, mostrar alerta y salir
        alert("El sorteo ya fue realizado. Reinicie la lista para volver a sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Ocultar la lista de nombres
    document.getElementById("listaAmigos").style.display = "none";

    // Mostrar solo el nombre sorteado
    document.getElementById("resultado").innerHTML = `<h2>🎉 Tu Amigo Secreto es: <strong>${amigoSecreto}</strong> 🎉</h2>`;

    yaSorteado = true; // Marcar que ya se sorteó
}

/* 
    Espacio para opiniones de desarrolladores:
    ------------------------------------------------------------
    -
    ------------------------------------------------------------
*/
