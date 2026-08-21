import leia from "readline-sync";


export function PlayerInicial() {
  let nome = leia.question("Qual o nome do campeao ? :")
  let dinheiro = 0
  let player = 
    {
      nome,
      idade: "10",
      pokebolas: [5],
      potions: [],
      dinheiro : 0,
      pokemons : [],


    }
  ;
  return player
}
