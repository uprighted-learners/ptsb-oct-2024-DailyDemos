// create an image with an alt tag and src
const img = document.createElement("img");
img.src = "https://loremflickr.com/320/240";
img.alt = "Kitty Kat";
console.log("image", img);

// add these to the body
document.body.appendChild(img);
