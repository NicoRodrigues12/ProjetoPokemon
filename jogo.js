
import { pokemons } from "./pokemons/pokemonskalos.js"
import leia from 'readline-sync'
import { PlayerInicial } from "./jogo/src/config/player.js"
import { criarEquipeLideres, batalha } from "./jogo/batalhas/combate.js"
import { ginasios } from "./jogo/batalhas/ginasios.js"
import { capturarPokemon } from "./jogo/src/captura.js"

const player = PlayerInicial()
const escolha = leia.keyInSelect([
  "Froakie",
  "Fennekin",
  "Chespin"])
const iniciais = [7, 4, 1]

    const pokemonEscolhido = pokemons.find(
        pokemon => pokemon.numero === iniciais[escolha]
    )

    player.pokemons.push(pokemonEscolhido)

    console.log(`voce escolheu ${player.pokemons[0].nome}`)

    while (true) {

      const opcao = leia.keyInSelect([
          "Meus Pokemons",
          "Explorar",
          "Ginasios",
          "Sair",
          "Mercado"
      ], "O que você deseja fazer?")
  
      if (opcao === -1 || opcao === 3) {
          console.log("Até a próxima!")
          break
      }
  
function encontrarPokemonSelvagem(){
  const indice = Math.floor(Math.random() * pokemons.length)
  return pokemons[indice]
}

      switch (opcao) {
  
          case 0:
              console.log("\n--- SEUS POKÉMON ---")
  
              player.pokemons.forEach((pokemon, index) => {
                  console.log(
                      `${index + 1}. ${pokemon.nome} - HP: ${pokemon.hp}`
                  )
              })
  
              break
  
          case 1:
              console.log("\nVoce saiu para explorar!")
              const encontrou = Math.random()

              if (encontrou <= 0.7) {
          
                  const pokemonSelvagem = encontrarPokemonSelvagem()
          
                  capturarPokemon(pokemonSelvagem, player)
          
              } else {
          
                  console.log(
                      "\nVoce explorou bastante, mas não encontrou nenhum Pokémon."
                  )
              }
          
              break
  
          case 2:
              console.log("\n--- GINASIOS ---")
  
              const escolhaGinasio = leia.keyInSelect(
                  ginasios.map(ginasio => ginasio.nome),
                  "Escolha um ginásio:"
              )
  
              if (escolhaGinasio === -1) {
                  break
              }
  
              const equipeLider = criarEquipeLideres(
                  ginasios[escolhaGinasio]
              )
  
              console.log(
                  `\nVocê entrou no ginasio de ${ginasios[escolhaGinasio].nome}!`
              )
  
              batalha(player.pokemons, equipeLider)
  
              break
      }
  }

  

  
  
  
  
  
  
