import leia from 'readline-sync'
import { pokebolas } from './pokebolas.js'
export function mercado() {

    console.clear()

    console.log('========== MERCADO ==========\n')

    pokebolas.forEach(pokebolas => {
        console.log(
            `${pokebolas.id} - ${pokebolas.simbolo} ${pokebolas.nome} - R$${pokebolas.preco}`
        )
    })

    console.log('\n0 - Sair')

    const opcao = leia.questionInt('\nQual Pokebola deseja comprar? ')

    if (opcao === 0) {
        return
    }

     pokebolas = pokebolas.find(
        pokebolas => pokebolas.id === opcao
    )

    if (!pokebolas) {
        console.log('\nPokebola invalida!')
        return
    }

    console.log(`\nVocê escolheu: ${pokebolas.simbolo} ${pokebolas.nome}`)
    console.log(`Preço: R$${pokebolas.preco}`)
    console.log(`Seu dinheiro: R$${PlayerInicial.dinheiro}`)

    const quantidade = leia.questionInt(
        '\nQuantas deseja comprar? '
    )

    if (quantidade <= 0) {
        console.log('\nQuantidade invalida!')
        return
    }

    const valorTotal = pokebolas.preco * quantidade

    if (PlayerInicial.dinheiro < valorTotal) {
        console.log('\nVocê não tem dinheiro suficiente!')
        console.log(`Faltam R$${valorTotal - PlayerInicial.dinheiro}`)
        return
    }

    PlayerInicial.dinheiro -= valorTotal

    console.log('\nCompra realizada!')
    console.log(
        `Você comprou ${quantidade}x ${pokebolas.nome}.`
    )

    console.log(`Total gasto: R$${valorTotal}`)
    console.log(`Dinheiro restante: R$${PlayerInicial.dinheiro}`)
}

mercado()