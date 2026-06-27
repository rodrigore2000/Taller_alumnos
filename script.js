// ================== SOLO AGREGAR (VERSIÓN BÁSICA) ==================

function agregar() {

    // 1. TOMAR DATOS DEL FORMULARIO
    const cliente = document.getElementById("cliente").value;
    const modelo = document.getElementById("modelo").value;
    const falla = document.getElementById("falla").value;
    const reparacion = document.getElementById("reparacion").value;

    // 2. BUSCAR LA TABLA
    const tabla = document.getElementById("tabla");

    // 3. CREAR UNA NUEVA FILA
    const fila = document.createElement("tr");

    // 4. INSERTAR DATOS EN LA FILA
    fila.innerHTML = `
        <td>${cliente}</td>
        <td>${modelo}</td>
        <td>${falla}</td>
        <td>${reparacion}</td>
    `;

    // ❌ BOTONES DESHABILITADOS (NO USAR EN BÁSICO)
    /*
    fila.innerHTML += `
        <td>
            <button onclick="editar(this)">Editar</button>
            <button onclick="eliminar(this)">Eliminar</button>
        </td>
    `;
    */

    // 5. AGREGAR FILA A LA TABLA
    tabla.appendChild(fila);

    // 6. LIMPIAR FORMULARIO
    limpiar();
}

// ================== LIMPIAR FORMULARIO ==================
function limpiar() {

    document.getElementById("cliente").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("falla").value = "";
    document.getElementById("reparacion").value = "";
}

/* =========================================================
❌ FUNCIONES AVANZADAS (NO USAR EN CLASE BÁSICA)

let editando = null;

function eliminar(boton) {
    boton.parentNode.parentNode.remove();
}

function editar(boton) {
    editando = boton.parentNode.parentNode;

    const celdas = editando.getElementsByTagName("td");

    document.getElementById("cliente").value = celdas[0].innerText;
    document.getElementById("modelo").value = celdas[1].innerText;
    document.getElementById("falla").value = celdas[2].innerText;
    document.getElementById("reparacion").value = celdas[3].innerText;
}
====================