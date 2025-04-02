const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

const [{name:firstname, address:{city:firstCity, street:{name: str1}}},{name:secondName, address:{city:secondCity, street:{name:str2}}}] = people

let final=[`${firstname} lives in ${firstCity} on ${str1}`,`${secondName} lives in ${secondCity} on ${str2}`]

console.log(final)

