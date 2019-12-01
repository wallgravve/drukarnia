const categories = {
1:{ 
    label: "Abstrakcje",
    nodes: "1"
}
,
2: {label: "Architektura",
nodes: "2"
}
,
3: {label: "Nowoczesne",
nodes: "3"
}
,
4: {label: "3D i perspektywa",
nodes: "4"
}
,
5: {label: "Alkohol i Drinki",
nodes: "5"
}
,
6: {label: "Dla dzieci",
nodes: "6"
}
,
7: {label: "Las Drzewa",
    nodes: "7"
}
,
8: {label: "Fantasy",
    nodeId: "8"
}
,
9: {label: "Kawa Herbata",
    nodeId: "9"
}
,
10: {label: "Przyprawy",
    nodeId: "10"
}
,
11: {label: "Kosmos",
    nodeId: "11"
}
,
12: {label: "Krajobraz",
    nodeId: "12"
}
,
13: {label: "Góry",
    nodeId: "13"
}
,
14: {label: "Jachty",
    nodeId: "14"
}
,
15: {label: "Kwiaty",
    nodeId: "15"
}
,
16: {label: "Ludzie",
    nodeId: "16"
}
,
17: {label: "Malarstwo",
    nodeId: "17"
}
,
18: {label: "Mapy świata",
    nodeId: "18"
}
,
19: {label: "Konie",
    nodeId: "19"
}
,
20: {label: "Miasta",
    nodeId: "20"
}
,
21: {label: "Miłość",
    nodeId: "21"
},
22: {label: "Mosty",
    nodeId: "22"
},
23: {label: "Morze i Oceany",
    nodeId: "23"
},
24: {label: "Jeziora i rzeki",
    nodeId: "24"
},
25: {label: "Łąki",
    nodeId: "25"
},
26: {label: "Ogrody Aleje Parki",
    nodeId: "26"
},
27: {label: "Owoce Warszywa",
    nodeId: "27"
},

28: {label: "Palmy",
    nodeId: "28"
},
29: {label: "Pejzaże",
    nodeId: "29"
},
30: {label: "Pomosty",
    nodeId: "30"
},
31: {label: "Motoryzacja",
    nodeId: "31"
},
32: {label: "Samoloty",
    nodeId: "32"
},
33: {label: "Statki",
    nodeId: "33"
},
34: {label: "Sexy",
    nodeId: "34"
},
35: {label: "Sport",
    nodeId: "35"
},
36: {label: "Street art",
    nodeId: "36"
},
37: {label: "Tunel i Przejście",
    nodeId: "37"
},
38: {label: "Tła i desenie",
    nodeId: "38"
},
39: {label: "Uliczki",
    nodeId: "39"
},
40: {label: "Wodospady",
    nodeId: "40"
},
41: {label: "Vintage i retro",
    nodeId: "41"
},
42: {label: "Zachody i wschody słońca",
    nodeId: "43"
},
44: {label: "Zwierzęta",
    nodeId: "44"
},


}

export default Object.keys(categories).map(value => ({
    value,
    label: categories[value]
}))