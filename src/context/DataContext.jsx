import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);
console.log(DataContext)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();


//   fetching all products from api
const fetchAllProducts = async ()=>{
try {
    const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
    console.log(res)
    const productsData = res.data.products
    setData(productsData)
} catch (error) {
    console.log(error)
}
}

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = ["ALL",...new Set(newVal)];
    return newVal;
  };

  const categoryData = getUniqueCategory(data, "category");
  const brandData = getUniqueCategory(data, "brand")

  return (
    <>
      <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryData, brandData }}>
        {children}
      </DataContext.Provider>
    </>
  );
};


export const getData = () => useContext(DataContext)