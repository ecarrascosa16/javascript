let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)


if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 17) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}