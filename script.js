const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const btnFix = document.getElementById('fix')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()) {
        lamp.src = '/img/ligada.jpg'
    }

}

function lampOff() {
    if(!isLampBroken()) {
        lamp.src = '/img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = '/img/quebrada.jpg'
    if(btnFix.style.display === 'none') {
        btnFix.style.display = 'block'
    }
}

function fixLamp() {
    if(isLampBroken()) {
        lamp.src = '/img/desligada.jpg'
        btnFix.style.display = 'none'
    }
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
// lamp.addEventListener('mouseover', lampOn)
// lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampBroken)

fix.addEventListener('click', fixLamp)