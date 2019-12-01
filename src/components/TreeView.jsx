import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MuiTreeView from 'material-ui-treeview';

const tree = [
{ 
"id": 100,
value: "Abstrakcje",
 "link": "/Category/graphic-resources/100?load_type=category",
"name": "Graphic Resources"
}
,
 {value: "Architektura",

}
,
 {value: "Nowoczesne",

}
,
 {value: "3D i perspektywa",

}
,
{value: "Alkohol i Drinki",

}
,
 {value: "Dla dzieci",

}
,
 {value: "Las Drzewa",

}
,
 {value: "Fantasy",
  
}
,
 {value: "Kawa Herbata",
  
}
,
{value: "Przyprawy",
  
}
,
{value: "Kosmos",
  
}
,
 {value: "Krajobraz",
    
}
,
 {value: "Góry",
 
}
,
{value: "Jachty",
   
}
,
 {value: "Kwiaty",
  nodes: [
    {value: "Dmuchawce" },
    {value: "Lilie" },
    {value: "Magnolie" },
    {value: "Maki" },
    {value: "Ochidee" },
    {value: "Róże" },
    {value: "Słoneczniki" },
    {value: "Inne kwiaty" },
    {value: "Storczyki" },
    {value: "Tulipany" },

  ]
}
,
{value: "Ludzie",
 
}
,
 {value: "Malarstwo",

}
,
{value: "Mapy świata",
  
}
,
 {value: "Konie",

}
,
 {value: "Miasta",
  
}
,
 {value: "Miłość",

},
{value: "Mosty",
  
},
{value: "Morze i Oceany",
 
},
 {value: "Jeziora i rzeki",
   
},
{value: "Łąki",
   
},
 {value: "Ogrody Aleje Parki",

},
{value: "Owoce Warzywa",

},

 {value: "Palmy",
  
},
 {value: "Pejzaże",
  
},
 {value: "Pomosty",
   
},
 {value: "Motoryzacja",
 nodes: [
   {value: "Samochody"},
   {value: "Motory"},
 ]
    
},
{value: "Samoloty",
    
},
 {value: "Statki",
  
},
{value: "Sexy",
  
},
 {value: "Sport",
 nodes: [
  {value: "Piłka nożna"},

]
  
},
 {value: "Street art",
 
},
{value: "Tunel i Przejście",
   
},
{value: "Tła i desenie",
   
},
{value: "Uliczki",
   
},
{value: "Wodospady",

},
{value: "Vintage i retro",
  
},
 {value: "Zachody i wschody słońca",
  
},
 {value: "Zwierzęta",
   
},
]


const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function FileSystemNavigator() {
  const classes = useStyles();

  return (
<div style={{disaply: "flex", flexDirection:"row"}}>

<div>
  <MuiTreeView
  defaultExpanded
  onLeafClick={node => alert("Leaf clicked: " + JSON.stringify(node))}
  onParentClick={node => alert("Parent clicked: " + JSON.stringify(node))}
  tree={tree}
/></div>
</div>
);
}

export default FileSystemNavigator;