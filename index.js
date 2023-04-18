// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0


// function increment() {
//     count += 1
//     countEl.textContent = count //or inner.Text
// }

// function save() {
//     let countDash = count + " - "
    
//     saveEl.innerText += countDash 
//     console.log(count)
// }

// //dodaje nową liczbe do ciągu znaków
    
//  function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr //saveEl.innerText = countStr tutaj nadpisuje dane
//     if (countEl!='0'){ //if resetujacy licznik po wcisnieciu przycisku i wyswietleniu poprzedniej liczby wejsc
//    countEl.textContent=0;
//    count=0;

// }

let saveEl = document.getElementById("save-el")
console.log('saveEl')
let countEl = document.getElementById("count-el")
console.log('countEl')
let count = 0
console.log('count')
function increment() {
    console.log('increment 1')
    count += 1
    countEl.textContent = count
}

 function save() {
     let countStr = count + " - "
     saveEl.textContent += countStr
     if (countEl!='0'){
    countEl.textContent=0;
    count=0;
    
}
 }

 
 