// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings
// em formato de ranking, como no exemplo abaixo:

// **Utilize o for...of para resolver**


// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

for (let indice = 0; indice < maioresPaises.length; indice++){
    console.log(`${indice+1}-${maioresPaises[indice]}`)
}
num = 1 
for(let numero of maioresPaises){
    console.log(`${num}- ${numero}`)
    num++
}