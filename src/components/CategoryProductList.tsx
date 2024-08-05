import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productCT } from '../context/productContext';
import { IProduct } from '../interface/Product';
import List from './List';
import DowMenu from './dowMenu';
import { ICategory } from '../interface/Category';
import { GetAllCategory } from '../service/category';

const CategoryProductList = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useContext(productCT);
  const [collection, setCollection] = useState<ICategory[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products) {
      console.log('Products from context:', products); // Debugging line
      const categoryProducts = products.filter((product: IProduct) => product.categoryId === id);
      setFilteredProducts(categoryProducts);
    }
  }, [id, products]);

  useEffect(() => {
    (async () => {
      const data = await GetAllCategory();
      setCollection(data);
    })();
  }, []);

  return (
    <div className="h-[auto] mb-8">
      <DowMenu category={collection}/>
      {/* <h1>Products in Category: {id}</h1> */}
      {filteredProducts.length > 0? (
        <List product={filteredProducts} />
      ) : (
        <h3>không có sản phẩm tương ứng.</h3>
      )}
      
    </div>
  );
};

export default CategoryProductList;
