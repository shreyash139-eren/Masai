const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

const [{name:firstname,address:{city:firstcity, street:{name:strname}}},{name:secondname,address:{city:secondcity, street:{name:str2name}}}]=people

let final=[`${firstname} lives in ${firstcity} on ${strname}`,`${secondname} lives in ${secondcity} on ${str2name}`]

console.log(final)

