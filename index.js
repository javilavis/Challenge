const encriptaciones = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encrypt(texto = "") {
  let result = "";
  const arrayText = Array.from(texto.toLowerCase());
  arrayText.map((caracter) => {
    const valoresDeEncriptaciones = Object.values(encriptaciones);
    const requiereEncriptacion = valoresDeEncriptaciones.includes(
      encriptaciones[caracter]
    );
    if (requiereEncriptacion) {
      result = result + encriptaciones[caracter];
    } else {
      result = result + caracter;
    }
  });
  return result;
}

function decrypt(texto = "") {
  const llavesDeEncriptaciones = Object.keys(encriptaciones);
  const valoresDeEncriptaciones = Object.values(encriptaciones);
  llavesDeEncriptaciones.forEach((llaveDeEncriptacion) => {
    const index = valoresDeEncriptaciones.indexOf(
      encriptaciones[llaveDeEncriptacion]
    );
    const decryptValue = llavesDeEncriptaciones[index];
    texto = texto.replaceAll(encriptaciones[llaveDeEncriptacion], decryptValue);
  });
  return texto;
}

const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");
const textAreaElement = document.getElementById("text");
const textResult = document.getElementById("text-result");
const emptyResult = document.getElementById("empty-result");
const coppyButton = document.getElementById("copy-button");

encryptButton.addEventListener("click", (event) => {
  emptyResult.classList.add("hidden");
  coppyButton.classList.add("block");
  console.log(textAreaElement.value);
  const textoEncriptado = encrypt(textAreaElement.value);
  console.log(textoEncriptado);
  if (textAreaElement.value !== textoEncriptado) {
    textResult.textContent = textoEncriptado;
  }
});

decryptButton.addEventListener("click", (event) => {
  emptyResult.classList.add("hidden");
  console.log(textAreaElement.value);
  coppyButton.classList.add("block");
  const textoDesencriptado = decrypt(textAreaElement.value);
  console.log(textoDesencriptado);
  if (textAreaElement.value !== textoDesencriptado) {
    textResult.textContent = textoDesencriptado;
  }
});

coppyButton.addEventListener("click", async (event) => {
  try {
    await navigator.clipboard.writeText(textResult.textContent);
    alert("se copió al portapapeles satisfactoriamente");
  } catch (error) {
    console.error(error);
  }
});
