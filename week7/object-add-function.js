let rectangle = {
    height: 10,
    width: 8
}

//rectangle.area() // TypeError

rectangle.area = function (){
    return this.height * this.width;
}

console.log(rectangle.area());