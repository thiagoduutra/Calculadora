function insert(num) {
  let numero = document.getElementById("result").value;
  document.getElementById("result").value = numero + num;
}

function cleaner() {
  document.getElementById("result").value = " ";
}

function calculo() {
  let result = document.getElementById("result").value;
  if (result) {
    document.getElementById("result").value = eval(result);
  }
}
