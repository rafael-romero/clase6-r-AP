let numeroDeCasillero = 0;

document.querySelector("#agregar-casillero").onclick = function () {
  numeroDeCasillero++;
  const divCasillero = document.createElement("div");

  const labelInputCasillero = document.createElement("label");
  labelInputCasillero.setAttribute("for", `salario${numeroDeCasillero}`);
  labelInputCasillero.textContent = `Salario Numero ${numeroDeCasillero}:  `;

  const inputSalario = document.createElement("input");
  inputSalario.className = `salario`;
  inputSalario.type = "number";

  divCasillero.appendChild(labelInputCasillero);
  divCasillero.appendChild(inputSalario);
  document.querySelector("#casilleros").appendChild(divCasillero);
};

document.querySelector("#eliminar-casillero").onclick = function () {
  const $casilleros = document.querySelector("#casilleros");
  if (numeroDeCasillero > 0) {
    $casilleros.removeChild($casilleros.lastChild);
    numeroDeCasillero--;
  }
};

function mostrarResultados() {
  document.querySelector("#resultados").style.display = "block";
}

function colocarResultado(calculo, tiempo, valor) {
  document.querySelector(`#${calculo}-salario-${tiempo}`).textContent = valor;
}

function calcularPromedioSalarioMensual(salarios) {
  const MESES_DEL_ANIO = 12;
  return (calcularPromedioSalarioAnual(salarios) / MESES_DEL_ANIO)
    .toFixed(2)
    .toString();
}

function calcularPromedioSalarioAnual(salarios) {
  let promedioSalarioAnual = 0;
  for (let i = 0; i < salarios.length; i++) {
    promedioSalarioAnual += salarios[i];
  }
  return (promedioSalarioAnual / salarios.length).toFixed(2).toString();
}

function calcularMenorSalarioAnual(salarios) {
  let menorSalario = salarios[0];
  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] < menorSalario) {
      menorSalario = salarios[i];
    }
  }
  return menorSalario.toString();
}

function calcularMayorSalarioAnual(salarios) {
  let mayorSalario = salarios[0];
  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] > mayorSalario) {
      mayorSalario = salarios[i];
    }
  }
  return mayorSalario.toString();
}

function obtenerSalarios() {
  const salarios = document.querySelectorAll(".salario");
  const valorDeSalarios = [];
  for (let i = 0; i < salarios.length; i++) {
    if (Number(salarios[i].value) !== 0) {
      valorDeSalarios.push(Number(salarios[i].value));
    }
  }
  return valorDeSalarios;
}

document.querySelector("#btn-calcular").onclick = function () {
  const salarios = obtenerSalarios();
  colocarResultado("mayor", "anual", calcularMayorSalarioAnual(salarios));
  colocarResultado("menor", "anual", calcularMenorSalarioAnual(salarios));
  colocarResultado("promedio", "anual", calcularPromedioSalarioAnual(salarios));
  colocarResultado(
    "promedio",
    "mensual",
    calcularPromedioSalarioMensual(salarios)
  );
  mostrarResultados();
};
