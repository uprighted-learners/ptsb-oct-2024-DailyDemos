const jsonString= '{"data": "some data goes here", "number": 42}';


const jsonObject = JSON.parse(jsonString) // loading the json string into memory as a object
console.log(jsonObject.data)
console.log(jsonObject.number)
console.log(jsonObject)
console.log(jsonString)