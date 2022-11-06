//split->string to array 
//join->array to string

var str="In space, no one can hear you code."
console.log(str.split())
console.log(str.split('e'))
console.log(str.split(' '))
console.log(str.split(''))

const arr=['B','n','n',5]
console.log(arr.join())
console.log(arr.join('a'))
console.log(arr.join(' '))
console.log(arr.join(''))

var s="water,space suits,food,plasma sword,batteries"
const arr1=s.split(',')
arr1.sort()
console.log(arr1)
console.log(arr1.join(','))

