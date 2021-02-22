const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
  ];

const computeTTC = (prixHT, taux = 20) => {
    return prixHT * (1 + taux/100);
}

const ttcPrices = phones.map(phone => computeTTC (phone.priceHT));
console.log(ttcPrices);