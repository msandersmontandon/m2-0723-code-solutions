async function getPokemon(name) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
  const pokemon = await response.json();
  console.log(pokemon);
}

getPokemon('cubone');
