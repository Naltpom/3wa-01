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