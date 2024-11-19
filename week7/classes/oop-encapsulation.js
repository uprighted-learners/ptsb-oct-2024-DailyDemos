const fido = {
  name: "Fido", // don't access this property directly
  color: "brown", // don't access this property directly
  describe() {
    return `Hello! My name is ${this.name} and I am ${this.color}.`;
  },
};


console.log(fido.describe())

console.log(fido.name, fido.color)