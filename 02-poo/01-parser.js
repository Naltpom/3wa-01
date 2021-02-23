
class Parser {
    constructor(sb) {
        this._sb = sb;
        this._number = [];
    };

    parse(phrase) {
        this._number = phrase
            .split(this._sb)
            .map(item => parseInt(item.trim(), 10))
            .filter((str) => /^\d+$/.test(str));
    };

    get str() {
        return this._number.join(' ');
    };
}

const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007
