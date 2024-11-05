// why does scope matter


// shopping experience

let cartTotal  = 0;

let temp = "cart is empty"


function addRxBarsToCart(){
   // do other stuff with cart
   cartTotal += 15;
}

function addShirtsToCart(){
    cartTotal += 55;
}

function informAboutDiscount(){
    if(cartTotal > 50){
        console.log("You will get a discount")
    }
}

function fraudDetection(){
    temp = "You are no longer a customer"
}



function theCartIsAssumedToBeZero(){
    console.log(temp)
    console.log(cartTotal)
}

fraudDetection()
addShirtsToCart();

theCartIsAssumedToBeZero()
addRxBarsToCart()


console.log(cartTotal)
informAboutDiscount()
