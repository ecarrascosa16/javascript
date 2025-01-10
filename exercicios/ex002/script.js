let anoAtual = new Date().getFullYear()


function verificar() {
    //idade
    let anoNascimento = document.getElementById('anoNas')
    let anos = Number(anoNascimento.value)
    let idade = Number(anoAtual - anos)
    let res = document.getElementById('res')

    
    //genero
    let feminino = document.getElementById('feminino').checked
    let masculino = document.getElementById('masculino').checked
    let genero = ''
    if (feminino) {
        genero = 'Mulher'
    } else if (masculino) {
        genero = 'Homem'
    } else {
        genero = 'Alienígena'
    }

    //imagem do genero
    let imagemIdade = document.getElementById('imgIdade')
    if (idade <= 0) {
        imagemIdade.style.background = 'url(img/nascer.PNG) no-repeat center center'
        imagemIdade.style.backgroundSize = 'cover'
        res.innerHTML = 'Calma, você ainda vai nascer'
    } else if (genero == 'Mulher' && idade <= 12) {
        imagemIdade.style.background = 'url(img/mcriança.PNG) no-repeat center center'
        imagemIdade.style.backgroundSize = 'cover'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Homem' && idade <= 12) {
        imagemIdade.style.background = 'url(img/hcrianca.PNG) no-repeat center center'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Mulher' && idade <= 20) {
        imagemIdade.style.background = 'url(img/Madolescente.PNG) no-repeat'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Homem' && idade <= 20) {
        imagemIdade.style.background = 'url(img/Hadolescente.PNG) no-repeat'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Mulher' && idade <= 60) {
        imagemIdade.style.background = 'url(img/adulta.jpg) no-repeat center center'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Homem' && idade <= 60) {
        imagemIdade.style.background = 'url(img/adulto.PNG) no-repeat center center'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Mulher' && idade <= 100) {
        imagemIdade.style.background = 'url(img/idosa.PNG) no-repeat top center'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (genero == 'Homem' && idade <= 100) {
        imagemIdade.style.background = 'url(img/idoso.PNG) no-repeat center right'
        imagemIdade.style.backgroundSize = 'cover'   
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    } else if (idade <= 10000) {
        imagemIdade.style.background = 'url(img/luto.PNG) no-repeat center right'
        imagemIdade.style.backgroundSize = 'cover' 
        res.innerHTML = `Acho que você não está mais entre nós`
    } else {
        res.innerHTML = `Preencha as informações corretamente`
    }

    
    
    
    
    
}