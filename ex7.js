let people=["Greg","Mary","Devon","James"]
//1
for (let i = 0; i < people.length; i++){
    console.log(people[i])
}
//2
people.shift()
console.log(people)
//3
people.pop()
console.log(people)
//4
people.unshift("Matt")
console.log(people)
//5
people.push("Mervin")
console.log(people)
//6
for (let i = 0; i <people.length; i++) {
    if(i<=1){
      console.log(people[i]) 
    }
    else{
        break;
    }
}
//7
const newpeople=people.slice(2,4)
console.log(newpeople)
//8
console.log(people.indexOf('Mary'))
//9
console.log(people.indexOf('Foo'))
//10
people=["Greg","Mary","Devon","James"]
people.splice(2,1,"Elizabeth","Artie")
console.log(people)
//11
const withBob=[]
console.log(withBob.concat(people.concat("Bob")))