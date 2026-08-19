
import { pokemons } from "./pokemons/pokemonskalos.js"
import leia from 'readline-sync'
import { PlayerInicial } from "./jogo/src/config/player.js"




const player = PlayerInicial()
export const escolha = leia.keyInSelect([
  "Froakie",
  "Fennekin",
  "Chespin"])
const iniciais = [7, 4, 1]

    const pokemonEscolhido = pokemons.find(
        pokemon => pokemon.numero === iniciais[escolha]
    )

    player.pokemons.push(pokemonEscolhido)

    console.log(`voce escolheu ${player.pokemons[0].nome}`)

    
