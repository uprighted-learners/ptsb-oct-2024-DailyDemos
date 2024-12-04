const buttonElement = document.querySelector("#button-wrapper");

buttonElement.addEventListener("click", (event) => {
  /// its doing this for you
  // const event.currentTarget = document.querySelector("#button-wrapper");
  // const event.target = document.querySelector("button");

  //event listener is on the button-wrapper div
  // it is the currentTarget in this case
  console.log("event currentTarget", event.currentTarget);

  //the button we clicked on was inside or nested inside
  //of our button-wrapper

  // target of this particular listener
  console.log("event target", event.target);

  //change the text
  event.target.textContent = "I changed the button";

  // delete an element

  // add a new class
});
