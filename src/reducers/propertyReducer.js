const initState = {
    properties:[
       {id:'1', 
       Agent:'Murani Karingi',
       details:"/one",
       image: "https://images.prop24.com/219296101/Crop320x213", 
       Description:'Modern family! Well-presented eclectic home located in the heart of Gardens, with super convenient and a trendy lifestyle package.',
       price: 'R 3 950 000',
       rooms:'3 Bedroom House for Sale in Gardens'
      },
      {id:'2', 
      Agent:'Willie Macharia',
      details:"/two",
      image: "https://images.prop24.com/214590932/Crop320x213" ,
      Description:'A home with Pizzazz Relax or entertain beautifully in the stunning living spaces of this glamorous home. Stylishly fitted eat-in kitchen flows out through fold-back doors to a private back courtyard. ',
      price:'R 5 195 000',
      rooms:'2 Bedroom House for Sale in Gardens'
    },
       {id:'3',
       Agent:'Dancan Angwenyi', 
       details:"/three",
       image: "https://images.prop24.com/226778111/Crop320x213" ,
       Description:'Vintage Appeal Looking to invest in a picture perfect starter home in the City Bowl? Look no further. This enchanting three bedroom, three bathroom (two en-suite) offers high ceilings, original wooden floors and gentle natural light throughout.',
       price:'R 3 490 000',
       rooms:'3 Bedroom House for Sale in Garden'
      }
    ]
  }
  
  const propertyReducer = (state = initState, action) => {
    return state;
  };
  
  export default propertyReducer;