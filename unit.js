/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numbEl=document.getElementById("numb-el");
const leng=document.getElementById("length");
const mas=document.getElementById("mass");
const vol=document.getElementById("volume");

let v=Number(numbEl.value)

function convert(){
    v=Number(numbEl.value)
    // console.log(v)
    len(v)
    mass(v)
    volm(v)

}


function len(v){
    v=Number(numbEl.value)
    const feet=v*3.281
    const f=feet.toFixed(3)
    const met=v/3.281
    let l=met.toFixed(3)
    leng.innerHTML=`${v} meters = ${f} feet   |   ${v} feet = ${l} meter`
}

function volm(v){
    v=Number(numbEl.value)
    const L=v*0.264
    const a=L.toFixed(3)
    const G=v/0.264
    const g=G.toFixed(3)
    vol.innerHTML=`${v} Liters = ${a} Gallons   |   ${v} Gallons = ${g} Liters`
}

function mass(v){
    v=Number(numbEl.value)
    const Kg=v*2.204
    const kg=Kg.toFixed(3)
    const P=v/2.204
    let p=P.toFixed(3)
    mas.innerHTML=`${v} Killogram = ${kg} Pounds   |   ${v} Pounds = ${p} Killograms`
}