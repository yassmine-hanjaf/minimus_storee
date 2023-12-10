// productcontext.js
import React, { createContext } from 'react';
import Produit1 from '../img/minimus_products/IMG_2346.jpg';
import Produit2 from '../img/minimus_products/IMG_2347.jpg';
import Produit3 from '../img/minimus_products/IMG_2354.jpg';
import Produit4 from '../img/minimus_products/IMG_2356.jpg';
import Produit5 from '../img/minimus_products/IMG_2359.jpg';
import Produit6 from '../img/minimus_products/IMG_2361.jpg';
import Produit7 from '../img/minimus_products/IMG_2372.jpg';
import Produit8 from '../img/minimus_products/IMG_2373.jpg';
import Produit9 from '../img/minimus_products/IMG_2380.jpg';
import Produit10 from '../img/minimus_products/IMG_2392.jpg';
import Produit11 from '../img/minimus_products/IMG_2411.jpg';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const products = [
    {
      id: 1,
      title: "Panda casquette",
      category: "",
      image: Produit1, // Provide the path or URL directly
      price : 120,
      description : "just like a panda, embrace your uniqueness and stand out from the crowd."
    },
    
    {
      id: 3,
      title: "sanAndreas casquette ",
      category: "",
      image: Produit3, // Provide the path or URL directly
      price : 120,
      description : "life is a game ,play it like grand theft auto ,and never look back."
    },
    {
      id: 2,
      title: "Breath casquette",
      category: "",
      image: Produit2, // Provide the path or URL directly
      price : 130,
      description : "inhale courage,exhale fear."
    },
    {
      id: 4,
      title: "ying yang casquette",
      category: "",
      image: Produit4, // Provide the path or URL directly
      price : 110,
      description : "just as day follows night and night folows day , life is a continuous dance of yin and yang."
    },
    {
      id: 5,
      title: "power casquette",
      category: "",
      image: Produit5, // Provide the path or URL directly
      price : 100,
      description : "power isn't determined by your size, but by the size of your heart and dreams."
    },
    {
      id: 6,
      title: "simple things casquette",
      category: "",
      image: Produit6, // Provide the path or URL directly
      price : 110,
      description : "emnbrace the beauty in the simple things."
    },
    {
      id: 7,
      title: "focus casquette",
      category: "",
      image: Produit7, // Provide the path or URL directly
      price : 120 ,
      description : "the key to succes is to focus on goals , not obstacles."
    },
    {
      id: 8,
      title: "sabr casquette",
      category: "",
      image: Produit8, // Provide the path or URL directly
      price : 130,
      description : "patience is bitter,but its fruit is sweet."
    },
    {
      id: 9,
      title: "breath casquette",
      category: "",
      image: Produit9, // Provide the path or URL directly
      price : 130,
      description : "inhale courage,exhale fear."
    },
    {
      id: 10,
      title: "doubt casquette",
      category: "",
      image: Produit10, // Provide the path or URL directly
      price : 140 ,
      description : "doubt kills more dreams than failure ever will."
    },
    {
      id: 11,
      title: "ying yang casquette",
      category: "",
      image: Produit11, // Provide the path or URL directly
      price : 120,
      description : "just as day follows night and night folows day , life is a continuous dance of yin and yang."
    },
  ];

  console.log('Products in ProductContext:', products);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
