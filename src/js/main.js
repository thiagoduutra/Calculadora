const resultInput = document.querySelector("#result");
const buttonResult = document.querySelector(".btnEqual");
const historic = document.querySelector(".historic");
const buttonClear = document.querySelector("#btnClear");

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

buttonClear.addEventListener("click", (e) => {
  e.preventDefault();
  const items = document.querySelector(".historic");
  const item = items.querySelector("li");

  item.remove();
});

buttonResult.addEventListener("click", (e) => {
  e.preventDefault();
  const resultValue = resultInput.value;
  const li = document.createElement("li");

  if (resultInput.value !== "") {
    li.classList = "historic";
    li.innerHTML = `Resultado: ${resultValue}`;
  }

  historic.appendChild(li);
  resultInput.value = "";
});
