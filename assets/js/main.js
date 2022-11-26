const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const tabelaImc = getTabelaImc(imc);

    const msg = `<b>Seu resultado é ${imc}</b>${tabelaImc}`;


    setResultado(msg, true);
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getTabelaImc (imc) {
    const tabela = [
        '<b> Abaixo do peso.</b> <br> Seu IMC está abaixo do recomendado. <br> O ideal é que seu IMC tenha variação de 18.5 a 24.9. <br> Para mais informações procure ajuda do seu nutricionista.',
        '<b> Peso adequado. </b> <br> Seu IMC está adequado. <br> Matanha sua alimentação saudavel. Para mais informações procure auxilio do seu nutricionista',
        '<b> Sobrepeso. </b><br> Seu IMC está acima do recomendado. <br> O IMC ideal deve ficar entre 18.5 a 24.9 com peso variando de 49.2 a 66.2. Para mais informações busque auxilio do seu nutricionista.',
        '<b> Obesidade grau 1.</b> <br> Seu IMC está acima do recomendado. <br> O IMC adequado deve ficar entre 18.5 a 24.9. <br> Para mais informações busque auxilio do seu nutricionista.',
        '<b> Obesidade grau 2.</b> <br> Seu IMC está acima do recomendado. <br>O IMC adequado deve ficar entre 18.5 a 24.9. <br> Para mais informações busque auxilio do seu nutricionista.',
        '<b> Obesidade grau 3.</b> <br> Seu IMC está acima do recomendado. <br> O IMC adequado deve ficar entre 18.5 a 24.9. <br> Para mais informações busque auxilio do seu nutricionista.',
    ]
    
    if (imc >= 39.9) return tabela[5];
    if (imc >= 34.9) return tabela[4];  
    if (imc >= 29.9) return tabela[3];  
    if (imc >= 24.9) return tabela[2];
    if (imc >= 18.5) return tabela[1];  
    if (imc < 18.5) return tabela[0]; 
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('erro');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};

function criaP () {
    const p = document.createElement('p');
    return p;
};
