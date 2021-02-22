// Soient les données suivantes. Créez un tableau strNumbers et pushez chacune des valeurs de ce tableau sans créer un tableau de tableaux :

const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];
strNumbers.push(...str1, ...str2)
console.log(strNumbers);