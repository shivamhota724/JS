// stack (primitive)

let myName = "sikander"

let anotherName = myName            
console.log(myName);           // sikander
console.log(anotherName);      // sikander


anotherName = "dhurandhar"         

console.log(myName);           // sikander
console.log(anotherName);      // dhurandher

// heap (non-primitive

let user1 = {
    laptop: "asus",
    phone: "moto"
}
let user2 = user1

console.log(user1);         // { laptop: 'asus', phone: 'moto' }
console.log(user2);         // { laptop: 'asus', phone: 'moto' }


user2.phone = "vivo"

console.log(user1);         // { laptop: 'asus', phone: 'vivo' }
console.log(user2);         // { laptop: 'asus', phone: 'vivo' }
