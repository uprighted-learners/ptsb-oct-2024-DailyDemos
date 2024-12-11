async function getPokemonData(){
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";

    // all api calls go through fetch()

    const response = await fetch(url); //HTTP GET command

    console.log(response)

    const data = await response.json();  // Grab the json or text from the response

    console.log("Response", data)

    console.log(data.abilities[0].ability.name)
}

getPokemonData()


