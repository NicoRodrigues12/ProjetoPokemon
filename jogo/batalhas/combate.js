import leia from 'readline-sync'
import { ginasios } from './ginasios.js'
import { pokemons } from '../../pokemons/pokemonskalos.js'
import { moves } from '../batalhas/moves.js'




export function criarEquipeLideres(ginasio){


    const equipe = ginasio.pokemons.map(numero =>
        pokemons.find(pokemon => pokemon.numero === numero)
    )

    return equipe
}

export const ginasioPedra = criarEquipeLideres(ginasios[0])
export const ginasioPlanta = criarEquipeLideres(ginasios[1])
export const ginasioEletrico = criarEquipeLideres(ginasios[2])
export const ginasioDragao = criarEquipeLideres(ginasios[3])







export function atacar(pokemon, inimigo){


    const escolha = leia.keyInSelect(pokemon.ataques)

    if (escolha === -1) {
        return
    }

    const golpe = moves.find(
        move => move.nome === pokemon.ataques[escolha]
    )


    console.log(`\n${pokemon.nome} usou ${golpe.nome}!`)

    inimigo.hp -= golpe.dano

    console.log(
        `${inimigo.nome} recebeu ${golpe.dano} de dano!`
    )

    console.log(
        `${inimigo.nome} está com ${inimigo.hp} HP.`
    )
}

export function atacarInimigo(inimigo, pokemon) {

    // Escolhe um ataque aleatório
    const escolha = Math.floor(Math.random() * inimigo.ataques.length)

    const nomeAtaque = inimigo.ataques[escolha]

    const golpe = moves.find(
        move => move.nome === nomeAtaque
    )

    console.log(`\n${inimigo.nome} usou ${golpe.nome}!`)

    pokemon.hp -= golpe.dano

    console.log(
        `${pokemon.nome} recebeu ${golpe.dano} de dano!`
    )

    console.log(
        `${pokemon.nome} está com ${pokemon.hp} HP.`
    )
}

export function curarEquipe(equipe){
    equipe.forEach(pokemon => {
        pokemon.hp = pokemon.hpMax
    });

    console.log("\nTodos os seus pokemons foram curados apos o combate!")
}

export function batalha(equipeJogador, equipeInimigo){

    let pokemonJogador = equipeJogador.find(
        pokemon => pokemon.hp > 0
    )

    let pokemonInimigo = equipeInimigo.find(
        pokemon => pokemon.hp > 0
    )

while (
    equipeJogador.some(pokemon => pokemon.hp > 0) &&
    equipeInimigo.some(pokemon => pokemon.hp > 0)
) {

    atacar(pokemonJogador, pokemonInimigo)

    if (pokemonInimigo.hp <= 0) {

        pokemonInimigo = equipeInimigo.find(
            pokemon => pokemon.hp > 0
        )

        if (pokemonInimigo){
            console.log(
                `\nO lider enviou ${pokemonInimigo.nome}!`
            )
        }
        continue
    }

    atacarInimigo(pokemonInimigo, pokemonJogador)


    
    if (pokemonJogador.hp <= 0) {

        console.log(
            `\n${pokemonJogador.nome} foi derrotado!`
        )
    
        pokemonJogador = equipeJogador.find(
            pokemon => pokemon.hp > 0
        )
    
        if (pokemonJogador) {
            console.log(
                `\nVocê enviou ${pokemonJogador.nome}!`
            )
        }
}
}



if (!equipeJogador.some(pokemon => pokemon.hp > 0)){
    console.log("\nVocê perdeu a batalha!") 
   }


if (!equipeInimigo.some(pokemon => pokemon.hp > 0)){
    console.log("\nVocê derrotou o líder do ginásio!") 
    curarEquipe(equipeJogador)
        }
    }
