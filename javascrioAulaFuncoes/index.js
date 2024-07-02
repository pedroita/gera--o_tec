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


let contado= 0;
function clicks(){
    contado ++;
}
clicks()

document.write(`<h1>${clicks}</h1>`)

function preencherSelect(tag, limite) {
     for (let i = 1; i < limite; i++) { 
        tag.innerHTML += `<option>${i}</option>`; 
    } 
}

preencherSelect(dia, 20); // Preenche o select de dias (1 a 31) preencherSelect(mes, 13); // Preenche o select de meses (1 a 12)
preencherSelect(mes, 13); // Preenche o select de dias (1 a 31) preencherSelect(mes, 13); // Preenche o select de meses (1 a 12)


let pessoa={
    nome: "Italo",
    idade: 44,
    genero: "masculino",
    eFumante: false,
    habilidades :["html", "CSS", "JS"],
    andar : function andar(){
        console.log("andei")
    }
}


document.write(pessoa)

// localStorage.setItem("nome", "italo")
// setTimeout(()=>{
//     alert("ola pessoal")
// },3000)


setInterval(()=>{
    console.log("oi")
},1000)