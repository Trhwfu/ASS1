import Slider from "./slider";
import Inputbot from "./input";
import Category from "./category";
import { useEffect, useState } from "react";
import { IProduct } from "../interface/Product";
import { GetAllProduct } from "../service/product";
import BestSellers from "./bestSellers";
import Collection from "./collection";
import { GetAllCategory } from "../service/category";
import { ICategory } from "../interface/Category";

const Home = () => {
  useEffect(() => {
    (async () => {
      const data = await GetAllProduct();
      const cate = await GetAllCategory()
      setProducts(data);
      setCategory(cate);
    })();
  }, []);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  return (
    <>
      <Slider category = {category}/>
      <BestSellers products={products} />
      <Category  />
      <Collection />
      <Inputbot />
    </>
  );
};

export default Home;
