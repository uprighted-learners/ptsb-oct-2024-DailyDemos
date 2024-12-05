// event listeners

// <html>
// <body>
//    <p>This is great</p>
//    <button>I Agree</button>
// </body>
// </html>


const pElement = document.querySelector('p')

pElement.addEventListener('mouseleave', function(event){
    event.stopPropagation() // dont fire to other parent event listeners
    alert("hey are you sure you want to leave the page?")
})