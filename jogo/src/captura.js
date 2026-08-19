import leia from "readline-sync"

export function capturarPokemon(pokemon, player) {

    console.log(`\nUm ${pokemon.nome} apareceu!`)

    const escolha = leia.keyInYN("Deseja tentar capturá-lo? ")

    if (!escolha) {
        console.log("Você decidiu não capturar o Pokémon.")
        return
    }
}