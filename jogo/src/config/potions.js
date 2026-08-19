import leia from 'readline-sync'
export const potions = [
    {
    id: 1,
     simbolo: "🧃",
     nome : "commom potion",
     efeito: "cura",
     cura: 20,
     preco : 300,   
    },
    {   
        id: 2,
        simbolo: "🥛",
        nome: "Super Potion",
        efeito: "cura",
        cura: 50,
        preco: 700
    },
    {
        id: 3,
        simbolo: "🍾",
        nome: "Hyper Potion",
        efeito: "cura",
        cura: 120,
        preco: 1500
    },
    {
        id: 4,
        simbolo: '🍯',
        nome: "Max Potion",
        efeito: "cura",
        cura: 999,
        preco: 2500
    }
];


    
function usarPotion(potion, pokemon) {

    if (potion.efeito === "cura") {
        pokemon.hp += potion.cura;

        if (pokemon.hp > pokemon.hpMax) {
            pokemon.hp = pokemon.hpMax;
        }
    }

}

usarPotion(potions[0], pikachu);