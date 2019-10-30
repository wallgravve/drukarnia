const categories = {
1: "Zwierzęta",
2: "Budynki i architektura",
3: "Biznes",
4: "Napoje",
5: "Środowisko",
6: "Uczucia i emocje",
7: "Jedzenie",
8: "Zasoby graficzne",
9: "Hobby i rozrywka",
10: "Przemysł",
11: "Krajobraz",
12: "Styl życia",
13: "Ludzie",
14: "Rośliny i kwiaty",
15: "Kultura i religia",
16: "Nauka",
17: "Społeczeństwo",
18: "Sport",
19: "Technologie",
20: "Transport",
21: "Podróże",
}

export default Object.keys(categories).map(value => ({
    value,
    label: categories[value]
}))