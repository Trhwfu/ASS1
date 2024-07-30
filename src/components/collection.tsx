// import React from 'react'
import { useEffect, useState } from "react";
import "../css/colletion.css";
import { ICategory } from "../interface/Category";
import { GetAllCategory } from "../service/category";
import { GetAllProduct } from "../service/product";
import { IProduct } from "../interface/Product";

const Collection = () => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productCount, setProductCount] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const allCategory = async () => {
      const data = await GetAllCategory();
      setCategory(data);
    };
    allCategory();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await GetAllProduct();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const demsoluongitem = () => {
      const count: { [key: string]: number } = {};
      products.forEach((product) => {
        if (count[product.categoryId]) {
          count[product.categoryId]++;
        } else {
          count[product.categoryId] = 1;
        }
      });
      setProductCount(count);
    };

    if (products.length > 0) {
      demsoluongitem();
    }
  }, [products]);

  return (
    <div className="collection">
      <div className="items w-[90%]">
        {category.map((item) => (
          <div key={item.id} className="item">
            <img src={item.banner} alt={item.name} />
            <div className="inf">
              <div className="tt">
                <p>
                  <span>{item.name}</span>
                </p>
                <p>{productCount[item.id] || 0} items</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
