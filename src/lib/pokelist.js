const fetch = require('node-fetch')
const POKEAPI = 'https://pokeapi.co/api/v2/pokemon?limit='

const pokeList = async (range) => {
  const listPoke = await fetch(`${POKEAPI}${range}`)
    .then(result=>result.json())
    .then(result => result.results)

  return listPoke
}

const capturePokemon = async (url) => {
  const pokemon = await fetch(url)
    .then(result => result.json())

  const {name, id, sprites: {front_default, front_shiny}, weight, types : typepokemon} = pokemon
  
  const redefinePokemon ={name, id, front_default, front_shiny, weight, typepokemon}

  return redefinePokemon
}

const createListPokemon = async (range) => {
  const list = await pokeList(range)

  const pokemons = await Promise.all(list.map(async ({url}) => {
    const pokeData = await capturePokemon(url)
    return pokeData
  }))

  return pokemons
}

export default createListPokemon
