const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const btnFix = document.getElementById('fix')
const orientacao = document.getElementById('orientacao')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()) {
        lamp.src = './img/ligada.jpg'
    }

}

function lampOff() {
    if(!isLampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
    if(btnFix.style.display === 'none') {
        btnFix.style.display = 'block'
    }
    orientacao.style.display = 'none'
    turnOn.style.display = 'none'
    turnOff.style.display = 'none'

}

function fixLamp() {
    if(isLampBroken()) {
        lamp.src = './img/desligada.jpg'
        btnFix.style.display = 'none'
    }
    orientacao.style.display = 'inline'
    turnOn.style.display = 'block'
    turnOff.style.display = 'block'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
// lamp.addEventListener('mouseover', lampOn)
// lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampBroken)

fix.addEventListener('click', fixLamp)