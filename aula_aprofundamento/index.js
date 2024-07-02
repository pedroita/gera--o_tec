
cep.onkeyup =()=>{
    if (cep.value.length===8){
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta=>resposta.json())
        .then(resposta2 => {
            console.log(resposta2)
            logradouro.value = resposta2.logradouro;
            bairro.value = resposta2.bairro;
            cidade.value= resposta2.localidade;
            estado.value=  resposta2.uf;
        })
    }
}