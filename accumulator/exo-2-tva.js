function getSumTTC(ht1, ht2, ht3, tauxTVA = 20) {
    return (ht1 + ht2 + ht3) * (1 + tauxTVA/100)
};

const pricesHT = [50, 20, 30, 40];
console.log(getSumTTC(...pricesHT));