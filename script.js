// let rat = "radioactive subway rat"
// console.log("yesterday in the subway in NYC" + " " + rat)

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
