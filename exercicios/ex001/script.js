let body = document.getElementById('body')
let paHoras = document.getElementById('p-horas')
let imgTempo = document.getElementById('img-tempo')
let hora = new Date()
let horaAgora = hora.getHours()

if (horaAgora < 6) {
    paHoras.innerHTML = `Agora são ${horaAgora} Horas`
    imgTempo.style.background = 'url(img/madrugada.jpg)'
    imgTempo.style.backgroundSize = 'cover'
    body.style.background = '#242424'  
    
} else if (horaAgora <= 12) {
    paHoras.innerHTML = `Agora são ${horaAgora} Horas`
    imgTempo.style.background = 'url(img/manha.jpg) center center'
    imgTempo.style.backgroundSize = 'cover'
    body.style.background = '#C6B689'
} else if (horaAgora <= 17) {
    paHoras.innerHTML = `Agora são ${horaAgora} Horas`
    imgTempo.style.background = 'url(img/tarde.jpg) center right'
    imgTempo.style.backgroundSize = 'cover'
    body.style.background = '#A57762'  
} else {
    paHoras.innerHTML = `Agora são ${horaAgora} Horas`
    imgTempo.style.background = 'url(img/noite.jpg) center right'
    imgTempo.style.backgroundSize = 'cover'
    body.style.background = '#474A49'  
}