function trocarModo(){
    let botaoModo = document.getElementById('trocaDeModo');
    let logo = document.getElementById('logo');
    let background = document.querySelector('body');
    if(botaoModo.src.includes('whitemode.png')){
        botaoModo.src = '/img/darkmode.png';
        logo.src = '/img/logo2.png';
        document.body.classList.add('whiteMode');
    }else{
        botaoModo.src = '/img/whitemode.png';
        document.body.classList.remove('whiteMode');
        logo.src = '/img/logo.png';
    }

}