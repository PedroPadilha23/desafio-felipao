//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
nomeHeroi = "Capitão Planeta" 

let xp = 10001;
let rank = "";

if (xp > 0 && xp < 1000) {
    rank = "Ferro"
} else if (xp > 1000 && xp < 2001) {
    rank = "Bronze"
} else if (xp > 2000 && xp < 5001) {
    rank = "Prata"
} else if (xp > 5000 && xp < 7001) {
    rank = "Ouro"
} else if (xp > 7000 && xp < 8001) {
    rank = "Platina"
} else if (xp > 8000 && xp < 9001) {
    rank = "Ascendente"
} else if (xp > 9000 && xp < 10001) {
    rank = "Imortal"
} else if (xp >= 10001) {
    rank = "Radiante"
} else if (xp < 0) {
    rank = "desconhecido"
}


console.log (" O Herói de nome " + nomeHeroi + " está no nível " + rank + ".")
