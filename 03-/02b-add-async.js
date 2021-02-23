const add = (number) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(number)) {
                reject(new Error("Ce n'est pas un nombre")) ;
            }
            resolve(number);
        }, 1000);
    });
add(1)
    .then(nbA => add(nbA + 2))
    .then(nbB => add(nbB + 3))
    .then(nbC => add(nbC + '4'))
    .then(nbD => add(nbD + 5))
    .then(nbE => {console.log(nbE)})
    .catch((err) => {console.log(`Erreur: ${err.message}`)});
/* 
const add = (number, callback) => {
    setTimeout(() => {
        if (isNaN(number)) {
            throw new Error("Ce n'est pas un nombre");
        }
        callback(number);
    }, 1000);
}

add(1, (nbA) => {
    console.log(nbA);
    add(nbA + 2, (nbB) => {
        console.log(nbB);
        add(nbB + 3, (nbC) => {
            console.log(nbC);
            add(nbC + 4, (nbD) => {
                console.log(nbD);
                add(nbD + 5, (nbE) => {
                    console.log(nbE);
                })
            })
        })
    })
})
*/