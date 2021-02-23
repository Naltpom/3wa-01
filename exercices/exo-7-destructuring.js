const students = [
    {
      name: "Alan",
      family: {
        mother: "Isa",
        father: "Philippe",
        sister: "Sylvie",
      },
      age: 35,
    },
    {
      name: "Bernard",
      family: {
        mother: "Particia",
        father: "Cécile",
        sister: "Annie",
      },
      age: 55,
    },
];


for (const {name, family: {sister}} of students) {
    console.log('prénom : ' + name + ', soeur : ' + sister) 
}