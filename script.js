const separarParesImpares = (array) => {
    const pares = array.filter(num => num % 2 === 0 || num === 0);
    const impares = array.filter(num => num % 2 !== 0);

    return {
        pares: pares,
        impares: impares
    }
}

const entrada = prompt('Digite números inteiros separados por vírgula (Ex.: 1,2,4): ')

if (entrada) {
    const numeros = entrada.split(',').map(num => parseInt(num.trim()));

    const resultado = separarParesImpares(numeros);

    console.log("Entrada: ", numeros);

    const pares = resultado.pares;
    const impares = resultado.impares;

    console.log("Números Pares: ", pares);
    console.log("Quantidade de pares: ", pares.length)
    console.log("Números Ímpares: ", impares);
    console.log("Quantidade de ímpares: ", impares.length)
}
else {
    console.log("Nenhuma entrada digitada");
}
