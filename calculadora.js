
const calcular = document.getElementById('calcular');





function calcularImc(){
const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;
const display = document.getElementById('display');

const result = (peso / (altura**2)).toFixed(1);
validarCampos(peso, altura);
verificacaoImc(result);


    
}

//--------------------------------------------------------------------------------------//

function verificacaoImc(result){
    let classificacao = '';
     if (result < 18.5 && result > 0){
            classificacao = 'abaixo do peso.';
        }else if (result < 25) {
            classificacao = 'Peso ideal. Parabéns!!!';
        }else if (result < 30){
            classificacao = 'Levemente acima do peso.';
        }else if (result < 35){
            classificacao = 'Obesidade grau I.';
        }else if (result < 40){
            classificacao = 'Obesidade grau II';
        }else if(result < 100) {
            classificacao = 'Obesidade grau III. Cuidado!!';
        } else {
            classificacao = 'Informe um valor valido';
        }

        display.textContent = `Seu IMC é ${result} = ${classificacao}`;
        
    }


//-------------------------------------------------------------------------------------//
function validarCampos(peso, altura){
    if (peso === '' && altura ==='') {
        alert('Preencha todos os campos!!!');
        location.reload('index.html');

    }
}



calcular.addEventListener('click', calcularImc);