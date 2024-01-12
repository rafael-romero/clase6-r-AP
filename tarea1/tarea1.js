function deshabilitarBotonOk() {
  document.querySelector("#btn-ok").disabled = true;
}

function mostrarElemento(elemento) {
  document.querySelector(`#${elemento}`).style.display = "block";
}

function crearInputsPersonas(numeroDePersonas) {
  for (let i = 0; i < numeroDePersonas; i++) {
    const divPersona = document.createElement("div");
    divPersona.id = `div-persona${i + 1}`;

    const labelInputPersona = document.createElement("label");
    labelInputPersona.setAttribute("for", `persona${i + 1}`);
    labelInputPersona.textContent = `Edad de la persona numero ${i + 1}:  `;

    const inputPersona = document.createElement("input");
    inputPersona.id = `persona${i + 1}`;
    inputPersona.className = `persona`;
    inputPersona.type = "number";
    inputPersona.min = "1";
    inputPersona.max = "150";
    inputPersona.step = "1";

    divPersona.appendChild(labelInputPersona);
    divPersona.appendChild(inputPersona);
    document.querySelector("#integrantes").appendChild(divPersona);
  }
}

function obtenerNumeroDePersonas() {
  return Number(document.querySelector("#cantidad-de-personas").value);
}

document.querySelector("#btn-ok").onclick = function (event) {
  const numeroDePersonas = obtenerNumeroDePersonas();
  if (numeroDePersonas > 0) {
    crearInputsPersonas(numeroDePersonas);
    mostrarElemento("btn-calcular");
    deshabilitarBotonOk();
  }
};

function calcularEdadMayor(edades) {
  let edadMayor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
    }
  }
  return edadMayor.toString();
}

function calcularEdadMenor(edades) {
  let edadMenor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
      edadMenor = edades[i];
    }
  }
  return edadMenor.toString();
}

function calcularPromedioDeEdades(edades) {
  let acumulador = 0;
  for (let i = 0; i < edades.length; i++) {
    acumulador += edades[i];
  }
  return (acumulador / edades.length).toFixed(1).toString();
}

function colocarResultado(objetivo, valor) {
  document.querySelector(`#${objetivo}-edad`).textContent = valor;
}

function obtenerEdades() {
  const personas = document.querySelectorAll(".persona");
  const edades = [];
  for (let i = 0; i < personas.length; i++) {
    edades.push(Number(personas[i].value));
  }
  return edades;
}

document.querySelector("#btn-calcular").onclick = function () {
  const edades = obtenerEdades();
  colocarResultado("mayor", calcularEdadMayor(edades));
  colocarResultado("menor", calcularEdadMenor(edades));
  colocarResultado("promedio", calcularPromedioDeEdades(edades));
  mostrarElemento("resultados");
};

function habilitarBotonOk() {
  document.querySelector("#btn-ok").disabled = false;
}

function ocultarElemento(elemento) {
  document.querySelector(`#${elemento}`).style.display = "none";
}

function eliminarInputsPersonas() {
  const $integrantes = document.querySelector("#integrantes");
  while ($integrantes.firstChild) {
    $integrantes.removeChild($integrantes.firstChild);
  }
}

function empezarDeNuevo() {
  eliminarInputsPersonas();
  ocultarElemento("resultados");
  ocultarElemento("btn-calcular");
  habilitarBotonOk();
}
