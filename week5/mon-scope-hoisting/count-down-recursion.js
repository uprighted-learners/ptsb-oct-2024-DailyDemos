function countdown(seconds) {
  if (seconds === 0) {
    console.log("Blastoff!");
  } else {
    console.log(seconds + "...");
    countdown(seconds - 1);
  }
}
countdown(3);

// calling the function 3 times
// the function calls exit