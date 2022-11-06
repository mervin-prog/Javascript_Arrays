//ex2.js
const cargoHold=['oxygen tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket']
cargoHold[5]='space tether'
console.log(cargoHold)
cargoHold.pop()
console.log(cargoHold)
cargoHold.shift()
console.log(cargoHold)
cargoHold.unshift(1138)
cargoHold.push("20 meters")
console.log(cargoHold)
console.log(`Elements : ${cargoHold} 
length : ${cargoHold.length}`)

//ex3.js
cargoHold.splice(3,0,"keys")
console.log(cargoHold)
cargoHold.splice(cargoHold.indexOf('instruction manual'),1)
console.log(cargoHold)
cargoHold.splice(2,3,"cat","fob","string cheese") //starting position-2 deletion elements-3
console.log(cargoHold)