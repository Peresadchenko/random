"use strict"

// ______________________________________счётчик__________________________________________________

// ______________переменная по id для "ОТ"______________
let fromNam = document.getElementById('fromNam')


// ______________переменная по id для "ДО"______________
let toNam = document.getElementById('toNam')



// ______________функция для кнопки (+) для "ДО"______________
let btnCounterToNamPlus = document.getElementById('btnCounterToNamPlus')
btnCounterToNamPlus.addEventListener('click', onClickCounterToNamPlus)
function onClickCounterToNamPlus() {
    counterToNam++
    document.getElementById('toNam').innerHTML = counterToNam
    setItemToNam()
}

// ______________функция для кнопки (-) для "ДО"______________
let btnCounterToNamMinus = document.getElementById('btnCounterToNamMinus')
btnCounterToNamMinus.addEventListener('click', onClickCounterToNamMinus)
function onClickCounterToNamMinus() {
    counterToNam--
    document.getElementById('toNam').innerHTML = counterToNam
    setItemToNam()
    if (counterToNam < 0) {
        onClickCounterToNamPlus()
    }
}

// ______________функция для кнопки (сброс) для "ДО"______________
let resetToNam = document.getElementById('resetToNam')
resetToNam.addEventListener('click', onClickToNamReset)
function onClickToNamReset() {
    counterToNam = 0
    document.getElementById('toNam').innerHTML = counterToNam
}


// ______________функция для кнопки (+) для "ОТ"______________
let btnCounterFromNamPlus = document.getElementById('btnCounterFromNamPlus')
btnCounterFromNamPlus.addEventListener('click', onClickCounterFromNamPlus)
function onClickCounterFromNamPlus() {
    counterFromNam++
    document.getElementById('fromNam').innerHTML = counterFromNam
    setItemFromNam()
}

// ______________функция для кнопки (-) для "ОТ"______________
let btnCounterFromNamMinus = document.getElementById('btnCounterFromNamMinus')
btnCounterFromNamMinus.addEventListener('click', onClickCounterFromNamMinus)
function onClickCounterFromNamMinus() {
    counterFromNam--
    document.getElementById('fromNam').innerHTML = counterFromNam
    setItemFromNam()
    if (counterFromNam < 0) {
        onClickCounterFromNamPlus()
    }
}

// ______________функция для кнопки (сброс) для "ОТ"______________
let resetFromNam = document.getElementById('resetFromNam')
resetFromNam.addEventListener('click', onClickFromNamReset)
function onClickFromNamReset() {
    counterFromNam = 0
    document.getElementById('fromNam').innerHTML = counterFromNam
}


// ______________запоминаем в локальное хранилище для "ДО"______________
function setItemToNam() {
    localStorage.setItem('counterToNam', counterToNam)
}

// ______________запоминаем влокальное хранилище для "ОТ"______________
function setItemFromNam() {
    localStorage.setItem('counterFromNam', counterFromNam)
}

// ______________выводим из локального хранилище для "ДО"______________
counterToNam = localStorage.getItem('counterToNam')
document.getElementById('toNam').innerHTML = counterToNam


// ______________выводим из локального хранилище для "ОТ"______________
counterFromNam = localStorage.getItem('counterFromNam')
document.getElementById('fromNam').innerHTML = counterFromNam



// ______________________________________random__________________________________________________

// ______________переменные по id для кнопки и итога______________
let randomBtn = document.getElementById('randomBtn')
let randomTotal = document.getElementById('randomTotal')


// ______________функция для кнопки (ЖМИ) и вывод результата______________
randomBtn.addEventListener('click', onClickRandomBtn)
function onClickRandomBtn() {
    function getRandomNam(min, max) {
        let totalNam = Math.random() * (max - min + 1) + min
        return Math.floor(totalNam)

    }
    randomTotal.innerHTML = getRandomNam(counterFromNam, counterToNam)
}