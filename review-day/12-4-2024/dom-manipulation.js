// document.createElement()

 // create an element that is not attached to the DOM yet 
 // but it is in memory

 const h1Element = document.createElement('h1')

// document.querySelector()

// <html>
// <body>
//    <p>This is great</p>
//    <button>I Agree</button>
// </body>
// </html>

const pElement = document.querySelector('p')

console.log(pElement) // it will show a huge object -> <p>This is great</p>

// element.appendChild(

const divElement = document.querySelector("div") // <div></div>
divElement.appendChild(pElement); //<div> <p> </p> </div>;

