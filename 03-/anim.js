const anime = () => new Promise((resolve, reject) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

    let randomNumber = Math.floor(Math.random() * 10);
    resolve(randomNumber + randomCharacter);
});

const gen = async (it = 10) => {
    let str = '';
    for (let i = 0; i < it; i++) {
        str = str + await anime()
    }
    return str;
}
gen(15).then(str => console.log(str))