// async await style
(async () => {
  async function getTime() {
    // async - look for a keyword call await, and then wait for reject/resolved Promise

    let thisTime; //3

    await new Promise((resolve) => {
      setTimeout(() => {
        thisTime = "midnight";
        resolve();
      }, 2000); //4
    }); //5

    return thisTime; //6
  }

  let time; //1
  time = await getTime(); //2
  console.log("The time is " + time); //7
})();




// if you are in a module the syntax will look more like this
// async function getTime() {
//   // async - look for a keyword call await, and then wait for reject/resolved Promise

//   let thisTime; //3

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       thisTime = "midnight";
//       resolve();
//     }, 2000); //4
//   }); //5

//   return thisTime; //6
// }

// await getTime();

// .then syntax

function getTime() {
  // async - look for a keyword call await, and then wait for reject/resolved Promise

  let thisTime; //3

  return new Promise((resolve) => {
    setTimeout(() => {
      thisTime = "midnight";
      resolve(thisTime);
    }, 2000); //4
  }); //5
}

getTime().then((result) => console.log("The time is " + result)); //.then() is missing


//async / await => .then

// for of/in loop => for loop