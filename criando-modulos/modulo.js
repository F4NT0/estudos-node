// Teste de Módulo com Funções

function soma(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}   

// Exportando essas Funções
// exports serve para que as funções sejam visiveis externamente, se quiser privado não coloque exports
exports.soma = soma;
exports.sub = sub;
exports.mult = mult;
exports.div = div;