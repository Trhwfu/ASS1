import React, { useEffect, useState } from "react";
import { IProduct } from "../../interface/Product";
import { GetAllProduct } from "../../service/product";
import ListAdmin from "./ListAdmin";
import ListCategory from "./ListCategory";
import { ICategory } from "../../interface/Category";
import { GetAllCategory } from "../../service/category";

const ListProductAdmin = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async () => {
      const productData = await GetAllProduct();
      const categoryData = await GetAllCategory();
      setProducts(productData);
      setCategories(categoryData);
    })();
  }, []);

  return (
    <>
      <ListAdmin products={products} />
      <ListCategory category={categories}/>
    </>
  );
};

export default ListProductAdmin;
