// let rat = "radioactive subway rat"
// console.log("yesterday in the subway in NYC" + " " + rat)

//OBJECT TEST
const animalFarm = {
  name: "Lotta the pig",
  age: 8,
  nickName: ["Miss Piggy", "Lotty", "Lot"],
  behaviour: ["playful", "friendly", "child-friendly"],
  metaData: {
    picture: "https://snl.no/purke",
    longitude: 71.22,
    latitude: 23.12
  }
}

//Create
animalFarm.isFun = false

//Read
console.log(animalFarm.name)
console.log(animalFarm["nickName"])

//Update
animalFarm.isFun = true
console.log(animalFarm.isFun)

//Delete
delete animalFarm.behaviour
console.log(animalFarm.behaviour)

console.log(animalFarm)

//Nested objects, object within an object
console.log(animalFarm.nickName[1])
console.log(animalFarm.metaData.picture)



//Stack and heap explained (Value & reference type)
//primitive type(small data type): string, boolean, number
//primitive types goes to stack
//reference type goes to heap, bigger types as object and array


//for loop

let turtleString = "turtle"
for(let i = 0; i < turtleString.length; i++) {
  console.log(turtleString[i])
}

//CREATE
let birds = ['hummingbird', 'magpie', 'crow', 'sparrow']

for(i = 0; i < birds.length; i++) {
  console.log(birds[i])
}

const bullFrogs = [
  {
    name: "great banjo toad",
    location: "australia",
    isThreatened: false
  },
  {
    name: "american bullfrog",
    location: "america",
    isThreatened: false,
  },
  {
    name: "toadman",
    location: "android galaxy",
    isThreatened: true,
  }
]

for(let i = 0; i < bullFrogs.length; i++) {
  console.log(`${bullFrogs[i].name} is located in ${bullFrogs[i].location} and is ${bullFrogs[i].isThreatened}`)
}