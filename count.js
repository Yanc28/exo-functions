/*Ecrire une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step
L'exécution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max
avec un intervale de step */

const min = 1
const max = 101
const step = 5

const count = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i)
  }
}

count(min, max, step)


