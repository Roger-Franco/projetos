
let peso;
let altura;
let imc;
let resultado;

function calcularImc(event) {
  event.preventDefault()
  peso = document.querySelector("#peso").value
  altura = document.querySelector("#altura").value
  imc = peso/(altura*altura)

  resultado = document.querySelector("#resultado")

  if (imc < 17) {
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está abaixo do peso...'
  } else if ( imc >17 && imc <= 18.49) {
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso...'
  } else if ( imc >= 18.5 && imc <= 24.99) {
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com o peso ideal...'
  } else if (imc >= 25 && imc <= 29.99) {
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, você está acima do peso...'
  } else if(imc >= 30) {
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, obesidade...'
  }

  document.querySelector("#peso").value = ''
  document.querySelector("#altura").value = ''
}
