function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;
    var resultado = document.getElementById('result');

    if (parseFloat(campoB) > parseFloat(campoA)) {
        resultado.innerHTML = 'Formulário válido! B é maior que A.';
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = 'Formulário inválido! B deve ser maior que A.';
        resultado.style.color = 'red';
    }
}
