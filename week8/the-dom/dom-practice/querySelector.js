const h1 = document.querySelector("h1"); // grab the first h1 tag
console.log("h1", h1);

// right click element from elements tab
// copy
// copy-selector
// paste into the querySelector and make sure it is string
const cricket = document.querySelector("#cricket-time"); // grabbing an id
console.log("id", cricket);

// grab the first list item using my css file selector
const li = document.querySelector("div > ul > li");
console.log("first list item", li);

// grab all items in the document

const allLi = document.querySelectorAll("li");
console.log("all list items", allLi);
