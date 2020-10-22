const fetch = require('node-fetch');
const POKEAPI = 'https://pokeapi.co/api/v2/pokemon?limit=';

const pokeList = async (range) => {
  const listPoke = await fetch(`${POKEAPI}${range}`)
    .then(result=>result.json())
    .then(result => result.results);

  return listPoke;
}

const descriptionPokemon = async (url) => {
  const description = await fetch(url)
    .then(result => result.json())
    .then(resultJson => resultJson.flavor_text_entries[8].flavor_text)
    .then(resultRawText => resultRawText.split('\n').join(' '))

  return description
}

const capturePokemon = async (url) => {
  const pokemon = await fetch(url)
    .then(result => result.json());

  const {
    height,
    name, 
    id, 
    sprites: {other: {'official-artwork': { front_default }}}, 
    weight, 
    types : typepokemon,
    species : { url : urlDescription }
  } = pokemon;

  const descriptionPoke = await descriptionPokemon(urlDescription)
  
  const redefinePokemon ={name, id, front_default, weight, height, typepokemon, descriptionPoke};

  return redefinePokemon;
}

/**
 * create a list of pokemon
 * @param {*} range all pokemons from id 1 to the number defined in the range variable
 */

const createListPokemon = async (range) => {
  const list = await pokeList(range);

  const pokemons = await Promise.all(list.map(async ({url}) => {
    const pokeData = await capturePokemon(url);
    return pokeData;
  }))

  return pokemons;
}

export default createListPokemon
