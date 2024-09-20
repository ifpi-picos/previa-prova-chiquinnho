export function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return null;
    }
    return Math.max(...lista)
}

export function atualizarPropriedade(objeto, propriedade, valor) {
    if (propriedade in objeto) {
        objeto[propriedade] = valor
        return objeto
    }
    else {
        return null
    }
}

export function verificarParOuImpar(numero) {
    if (isNaN(numero)) {
        return null
    } else if (numero % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

export function contarCaracter(palavra, caractere) {
    if (typeof palavra !== "string" || typeof caractere !== "string") {
        return null
    } else {
        let caractereMin = caractere.toLocaleLowerCase() 
        let palavraMin = palavra.toLocaleLowerCase()

        let contador = 0
        let i = 0

        while (i < palavraMin.length) {
            if (palavraMin[i] === caractereMin) {
                contador++
            }
            i++
        }
        return contador

    }

}



// function maiorNumero() {
//     return Math.max(...lista)  //Pede pro chat explicar esse negócio porque é interessante
//     //Da pra fazer com for, ordenando a lista e escolhendo o final.
// }
// verificarParOuImpar,
// contarCaracter,
// atualizarPropriedade,