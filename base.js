function randomizer(){
  var min = Math.ceil(0);
  var max = Math.floor(16777215);
  var resultado = Math.floor(Math.random() * (max - min) + min)
  var pasoAHex = resultado.toString(16);
  for (i = 0; i <= 6; i++){
    if(pasoAHex.length < i){
      pasoAHex = "0" + pasoAHex;
    }
  }
  document.getElementById('prueba').value = "#"+ pasoAHex;
  document.body.style.backgroundColor = document.getElementById('prueba').value;
}

randomizer();
