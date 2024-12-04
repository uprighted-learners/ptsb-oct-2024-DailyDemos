let form = document.querySelector("form");
// adding event listener to form with event type of 'submit'
form.addEventListener("submit", (event) => {
  // prevent the browser from refreshing the page
  event.preventDefault(); //stop, don't do the normal thing
  // user variable to hold the username input value
  const user = form.username.value;
  console.log(user);
  // reset the form inputs so they are blank
  //   form.reset();
});
