// "use strict"



let btnCounterToNamMinus = document.getElementById('btnCounterToNamMinus')
let btnCounterToNamPlus = document.getElementById('btnCounterToNamPlus')

let btnCounterFromNamMinus = document.getElementById('btnCounterFromNamMinus')
let btnCounterFromNamPlus = document.getElementById('btnCounterFromNamPlus')

let resetToNam = document.getElementById('resetToNam')
let resetFromNam = document.getElementById('resetFromNam')

let toNam = document.getElementById('toNam')
let fromNam = document.getElementById('fromNam')

btnCounterToNamPlus.addEventListener('click', onClickCounterToNamPlus)
function onClickCounterToNamPlus() {
    counterToNam++
    document.getElementById('toNam').innerHTML = counterToNam
    setItemToNam()
}

btnCounterFromNamPlus.addEventListener('click', onClickCounterFromNamPlus)
function onClickCounterFromNamPlus() {
    counterFromNam++
    document.getElementById('fromNam').innerHTML = counterFromNam
    setItemFromNam()
}

btnCounterToNamMinus.addEventListener('click', onClickCounterToNamMinus)
function onClickCounterToNamMinus() {
    counterToNam--
    document.getElementById('toNam').innerHTML = counterToNam
    setItemToNam()
    if (counterToNam < 0) {
        onClickCounterToNamPlus()
    }
}

btnCounterFromNamMinus.addEventListener('click', onClickCounterFromNamMinus)
function onClickCounterFromNamMinus() {
    counterFromNam--
    document.getElementById('fromNam').innerHTML = counterFromNam
    setItemFromNam()
    if (counterFromNam < 0) {
        onClickCounterFromNamPlus()
    }
}

resetToNam.addEventListener('click', onClickToNamReset)
function onClickToNamReset() {
    counterToNam = 0
    document.getElementById('toNam').innerHTML = counterToNam
}

resetFromNam.addEventListener('click', onClickFromNamReset)
function onClickFromNamReset() {
    counterFromNam = 0
    document.getElementById('fromNam').innerHTML = counterFromNam
}

function setItemToNam() {
    localStorage.setItem('counterToNam', counterToNam)
}

function setItemFromNam() {
    localStorage.setItem('counterFromNam', counterFromNam)
}

counterToNam = localStorage.getItem('counterToNam')
document.getElementById('toNam').innerHTML = counterToNam

counterFromNam = localStorage.getItem('counterFromNam')
document.getElementById('fromNam').innerHTML = counterFromNam



let randomBtn = document.getElementById('randomBtn')
let randomTotal = document.getElementById('randomTotal')


randomBtn.addEventListener('click', onClickRandomBtn)

function onClickRandomBtn() {
    function getRandomNam(min, max) {
        let totalNam = Math.random() * (max - min + 1) + min
        return Math.floor(totalNam)

    }
    randomTotal.innerHTML = getRandomNam(counterFromNam, counterToNam)
}







