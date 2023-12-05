const randomito = document.getElementById('boton');
const texto = document.getElementById('prueba');

function randomizer(){
  min = Math.ceil(0);
  max = Math.floor(16777215);
  resultado = Math.floor(Math.random() * (max - min) + min)
  pasoAHex = resultado.toString(16);
  for (i = 0; i <= 6; i++){
    if(pasoAHex.length < i){
      pasoAHex = "0" + pasoAHex;
    }
  }
  texto.value = "#"+ pasoAHex;
  document.body.style.backgroundColor = texto.value;
}

randomizer();

randomito.addEventListener("click",randomizer);
