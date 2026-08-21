import leia from "readline-sync"

export function capturarPokemon(pokemon, player) {

    console.log(`\nUm ${pokemon.nome} apareceu!`)

    const escolha = leia.keyInYN(
        "Deseja tentar capturá-lo? "
    )

    if (!escolha) {
        console.log("Você decidiu não capturar o Pokémon.")
        return
    }

    if (player.pokebolas <= 0) {
        console.log("\nVocê não possui Pokébolas!")
        return
    }

    player.pokebolas--

    console.log("\nVocê lançou uma Pokébola!")

    const numeroSorteado = Math.random() * 100

    if (numeroSorteado <= pokemon.chanceCaptura) {

        console.log(`\nVocê capturou ${pokemon.nome}!`)

        const pokemonCapturado = {
            ...pokemon,
            ataques: [...pokemon.ataques]
        }

        player.pokemons.push(pokemonCapturado)

    } else {

        console.log(`\n${pokemon.nome} escapou da Pokébola!`)
    }
}