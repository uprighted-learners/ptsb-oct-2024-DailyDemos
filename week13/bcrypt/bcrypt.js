const bcrypt = require('bcrypt')
const password = "dontrepeatpasswords"
const saltRounds = process.env.SALT;

console.log("Bcrypt in the house");

const hashedPassword = bcrypt.hashSync(password, saltRounds)

console.log('Hashed pword:', hashedPassword)