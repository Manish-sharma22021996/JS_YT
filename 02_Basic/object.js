

const tinderUser = new Object() // singleton object
 tinderUser.id = "123abc"
 tinderUser.name = "Manish"
 tinderUser.isLoggedin = false
console.log(tinderUser)


const obj1 = {1 : "Manish", 2 : "Anish"}
const obj2 = {3 : "Manish23", 4 : "Anish34"}

const obj3 = {obj1, obj2}

const obj4 = Object.assign({}, obj1, obj2)
//    OR  
const obj5 = Object.assign( obj1, obj2) // same as line 15

// using spread operator

const obj6 = {...obj1, ...obj2} // best way to do it



console.log(obj3)
console.log(obj4)