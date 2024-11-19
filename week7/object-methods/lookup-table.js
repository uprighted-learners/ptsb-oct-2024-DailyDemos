let fruitTranslator = {
  apple: "manzana",
  banana: "plátano",
  cherry: "cereza",
};

console.log(fruitTranslator.apple)


function getPoemTitle(selectedAuthor){
  let poemTitlesByAuthor = {
    "Robert Frost": "Stopping by Woods on a Snowy Evening",
    "Shel Silverstein": "Falling Up",
    "Sylvia Plath": "The Bell Jar",
  };
  
  return poemTitlesByAuthor[selectedAuthor]
}

console.log(getPoemTitle("Sylvia Plath"))