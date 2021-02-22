
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
// numbers.shift();

function accumulator(numbers, acc = 0) {
  const number = numbers.shift();
  acc += number;
  // Une condition d'arrêt et retourner la somme des valeurs du tableau
  // dans la fonction on ré-appelle la fonction elle-même
  console.log(numbers.lenght)
  if (numbers.lenght > 0) {
    return accumulator(numbers, acc);
  } else {
    return acc;
  }
  // return numbers.reduce((a, b) => a + b);
}

console.log(accumulator(numbers)); // doit retourner 55