// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { IProduct } from "../interface/Product";
// import instance from "../config/axios";

// const SearchResults = () => {
//   const [search] = useSearchParams();
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [keyword, setKeyword] = useState<string>('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const keyword = search.get('keyword') || '';
//       setKeyword(keyword);

//       try {
//         const { data } = await instance.get(`products?name_like=${keyword}`);
//         setProducts(data);

//         // Check for duplicate IDs
//         const ids = data.map((product: IProduct) => product.id);
//         const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
//         if (duplicates.length > 0) {
//           console.warn('Duplicate IDs found:', duplicates);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [search]);

//   return (
//     <div>
//       <h1>Search results for keyword: "{keyword}"</h1>
//       {products.length > 0 ? (
//         products.map((product: IProduct) => (
//           <div key={product.id} className="product-item">
//             <h2>{product.name}</h2>
//             <img src={product.image} alt={product.name} />
            
//             <p>Price: {product.price}</p>
//             <p>Quantity: {product.quantity}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
