import "./styles.css";

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let respuesta: number = document.getElementById("respuesta");

rotulo1.innerHTML = "Potenciar numeros";
rotulo2.innerHTML = "Ingrese base";
rotulo3.innerHTML = "Ingrese exponente";

//Boton
let btnEnv = document.getElementById("btnEnv");
let baseHTML: number = document.getElementById("dato1");
let exponenteHTML: number = document.getElementById("dato2");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos

  let base = Number(dato1.value);
  let exponente = Number(dato2.value);

  let resultado: number = 1;
  if (exponente === 0) {
    respuesta.innerHTML = "El resultado es :" + resultado;
    return (resultado = 1);
  } else {
    for (let i = 1; i <= exponente; i++) {
      resultado = resultado * base;
      console.log(resultado);
    }

    respuesta.innerHTML = "El resultado es :" + resultado;
    return resultado;
  }
});
