function boasVindas(nome){
    document.write(`<h1>Bem-Vindo (a), ${nome}! </h1>`)
}

boasVindas("italo");

boasVindas("Márcia");

boasVindas("Alessandro");
boasVindas("");

function somarnumero(numero1,numero2){
    let resultado = numero1+numero2;
    return resultado;
}

document.write(`<h1>O resultado é ${somarnumero(10,4)}</h1>`)

