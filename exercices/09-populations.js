// Soit les données suivantes populations, ordonnez-les par ordre croissant par rapport à la longueur des noms.
// Indications : utilisez la méthode sort, cette méthode modifie le tableau. Vous pouvez lui passer une fonction (fléchée) pour calculer l'ordre par rapport à une clé du tableau ou un calcul spécifique. Reportez-vous à la documentation : sort.

// Ajoutez une clé lenName aux éléments du tableau populations vous assignerez la longueur de chaque nom à cette variable.

// Regroupez maintenant dans un nouveau tableau groupNames les noms de même longueur (même nombre de caractères).

// Indications : Imaginez une structure de données, par exemple un tableau de tableau ou un Map, vous pouvez également utiliser filter pour regrouper les noms de même longueur dans le nouveau tableau groupNames

const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

populations.sort((a, b) => a.name.length - b.name.length);

for (const person of populations) {
    person.lenName = person.name.length;
}

// const popWithLenNames = populations.map((person) => ({
//     ...person, lenName: person.name.length,    
// }));
// const lenNames = new Set(populations.map(person => person.lenName));

// const groupNames = [];
// for (const lenName of lenNames) {
//     const filterPopulation = populations.filter((person) => person.lenName === lenName);
//     groupNames.push([lenName, filterPopulation])
// }

// // console.log(groupNames);

// const mapNames = new Map(groupNames);
// console.log(mapNames);









const map = new Map(
    [...new Set(populations.map(person => person.lenName))]
    .map(lenName => [
        lenName, 
        populations.filter((person) => person.lenName === lenName)
    ])
);



