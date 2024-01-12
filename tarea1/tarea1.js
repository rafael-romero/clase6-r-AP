const $btnOk = document.querySelector("#btn-ok");

$btnOk.onclick = function (event) {
  const cantidadDePersonas = Number(
    document.querySelector("#cantidad-de-personas").value
  );

  for (let i = 0; i < cantidadDePersonas; i++) {
    const divPersona = document.createElement("div");
    divPersona.id = `div-persona${i + 1}`;

    const labelInputPersona = document.createElement("label");
    labelInputPersona.for = `persona${i + 1}`;
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
  if (cantidadDePersonas > 0) {
    $btnOk.disabled = true;
  }
  mostrarElemento("btn-calcular");
  event.preventDefault();
};

function obtenerEdades() {
  const nodeListEdades = document.querySelectorAll(".persona");
  const edades = [];
  for (let i = 0; i < nodeListEdades.length; i++) {
    edades.push(Number(nodeListEdades[i].value));
  }
  return edades;
};

function calcularEdadMayor(edades) {
  let edadMayor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
    }
  }
  return edadMayor.toString();
};

function calcularEdadMenor(edades) {
  let edadMenor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
      edadMenor = edades[i];
    }
  }
  return edadMenor.toString();
};
function calcularPromedioDeEdades(edades) {
  let acumulador = 0;
  for (let i = 0; i < edades.length; i++) {
    acumulador += edades[i];
  }
  return (acumulador / edades.length).toFixed(1).toString();
};

function colocarResultado(objetivo, valor) {
  document.querySelector(`#${objetivo}-edad`).textContent = valor;
};


function mostrarElemento(elemento){
  document.querySelector(`#${elemento}`).style.display = "block";
};


const $btnCalcular = document.querySelector("#btn-calcular");
$btnCalcular.onclick = function () {
  const edades = obtenerEdades();
  colocarResultado("mayor", calcularEdadMayor(edades));
  colocarResultado("menor", calcularEdadMenor(edades));
  colocarResultado("promedio", calcularPromedioDeEdades(edades));
  mostrarElemento('resultados');
};

function eliminarInputs() {
  const $integrantes = document.querySelector("#integrantes");
  while ($integrantes.firstChild) {
    $integrantes.removeChild($integrantes.firstChild);
  }
}


function ocultarElemento(elemento){
  document.querySelector(`#${elemento}`).style.display = "none";
};


function empezarDeNuevo() {
  eliminarInputs();
  ocultarElemento('resultados');
  ocultarElemento("btn-calcular");
  $btnOk.disabled = false;
}
