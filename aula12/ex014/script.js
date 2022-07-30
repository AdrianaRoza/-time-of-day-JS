function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var mim = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpeg'
        document.body.style.background = '#f8c173ff'
        msg.innerHTML = ` <br>Agora são ${hora} horas.</br> Bom dia!`
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpeg'
        document.body.style.background = '#fb5b02ff'
        msg.innerHTML = `<br>Agora são ${hora} horas.</br> Boa tarde!`
    }else { 
        img.src = 'fotonoite.jpeg'
        document.body.style.background = '#010619ff'
        msg.innerHTML = `<br>Agora são ${hora}:${mim}hrs.</br>   Boa noite!  `

    }
    
}

