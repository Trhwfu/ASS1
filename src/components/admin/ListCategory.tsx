import React, { useContext, useEffect, useState } from 'react'
import { ICategory } from '../../interface/Category'
import { CategoryCT } from '../../context/categoryContext'
import { Link } from 'react-router-dom'
import { IProduct } from '../../interface/Product'
import { GetAllProduct } from '../../service/product'

type Props = {
    category: ICategory[]
}

const ListCategory :React.FC<Props> = ({category}) => {
    const {onDelete} = useContext(CategoryCT)
    const [products, setProducts] = useState<IProduct[]>([]);
    const [productCount, setProductCount] = useState<{ [key: string]: number }>({});

    useEffect(() => {
      const fetchProducts = async () => {
        const productsData = await GetAllProduct();
        setProducts(productsData);
      };
  
      fetchProducts();
    }, []);
  
    useEffect(() => {
      const countProductsByCategory = () => {
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
        countProductsByCategory();
      }
    }, [products]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách loại sản phẩm</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên thể loại</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lương camp</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {category.length > 0 ? (
            category.map((category: ICategory, index: number) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <img className="w-24" src={category.banner} alt={category.name} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productCount[category.id] || 0}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/admin/category/edit/${category.id}`} className="text-blue-600 hover:text-blue-900 mr-4">Sửa</Link>
                  <button 
                    onClick={() => onDelete(category.id)} 
                    className="text-red-600 hover:text-red-900"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="px-6 py-4 text-center text-gray-500">Không có sản phẩm</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListCategory