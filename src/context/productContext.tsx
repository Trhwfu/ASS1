// context/productContext.tsx

import React, { createContext, useEffect, useState } from 'react';
import { IProduct, formType } from '../interface/Product';
import { AddProduct, GetAllProduct, EditProduct, DeleteProduct } from '../service/product';

type Props = {
    children: React.ReactNode;
};

export const productCT = createContext({} as any);

const ProductContext = ({ children }: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        (async () => {
            const data = await GetAllProduct();
            setProducts(data);
        })();
    }, []);

    const onDelete = async (id:  string) => {
        try {
            if (confirm("Are you sure you want to delete")) {
                await DeleteProduct(id);
                alert("Xóa thành công");
                setProducts(products.filter((product: IProduct) => product.id !== id));
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmitUpdate = async (formData: formType, id: string) => {
        try {
          const productToUpdate = { ...formData };
          const data = await EditProduct(productToUpdate, id);
          const updatedProducts = products.map((product) =>
            product.id === id ? { ...product, ...data } : product
          );
          setProducts(updatedProducts);
          alert("Cập nhật thành công");
          console.log(updatedProducts)
        } catch (error) {
          console.log(error);
        }
      };

    const onAdd = async (dataproduct: formType) => {
        try {
            const data = await AddProduct(dataproduct);
            setProducts([...products, data]);
            console.log(data);
            alert("Thêm mới thành công");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <productCT.Provider value={{ products, onDelete, onAdd, onSubmitUpdate }}>
            {children}
        </productCT.Provider>
    );
};

export default ProductContext;
