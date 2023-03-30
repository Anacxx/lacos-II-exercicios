// # Exercício 2

// Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a **tabuada** do número,
// de 1 a 10.

// for in 


// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let num = Number(prompt("Digite um número:"))
for (let indice = 0; indice < 11; indice++){
    console.log(`${indice} x ${num} = ${indice * num}`)
}
