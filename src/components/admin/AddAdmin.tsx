// import React, { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { formType } from "../../interface/Product";
// import { useNavigate } from "react-router-dom";
// import { productCT } from "../../context/productContext";
// import { ICategory } from "../../interface/Category";
// import { GetAllCategory } from "../../service/category";
// // import { AppCT } from "../../context/AppContext";
// // import MessageBox from "../message";

// const AddProduct: React.FC = () => {
//   const { onAdd } = useContext(productCT);
// //   const {appState,dispatch} = useContext(AppCT)
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<formType>();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState<ICategory[]>([]);

//   useEffect(() => {
//     (async () => {
//       const categoryData = await GetAllCategory();
//       setCategories(categoryData);
//     })();
//   }, []);

//   const onSubmit = async (formData: formType) => {
//     const newProduct = {
//       ...formData,
//       reviews: [],
//       order:0  // Initialize reviews to an empty array
//     };
//     await onAdd(newProduct);
//     navigate("/admin");
//     reset();
//   };

//   return (
//     <div className="container mx-auto p-4 ">
//       <h2 className="text-2xl font-bold mb-4">Thêm mới sản phẩm</h2>
//       {/* {(appState.Message.status) && 
//       <MessageBox/>
//       } */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-4 bg-white p-6 rounded shadow-md"
//       >
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Tên sản phẩm
//           </label>
//           <input
//             id="name"
//             type="text"
//             {...register("name", { required: true, minLength: 6 })}
//             className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
//               errors.name ? "border-red-500" : ""
//             }`}
//             placeholder="Tên sản phẩm"
//           />
//           {errors.name && (
//             <p className="text-red-600 text-xs mt-1">
//               Tên không được để trống và nhỏ hơn 6 ký tự
//             </p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//             Ảnh sản phẩm 1
//           </label>
//           <input
//             id="image"
//             type="text"
//             {...register("image")}
//             className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
//             placeholder="Ảnh sản phẩm 1"
//           />
//         </div>

//         <div>
//           <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
//             Ảnh sản phẩm 2
//           </label>
//           <input
//             id="image2"
//             type="text"
//             {...register("image2")}
//             className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
//             placeholder="Ảnh sản phẩm 2"
//           />
//         </div>

//         <div>
//           <label htmlFor="image3" className="block text-sm font-medium text-gray-700">
//             Ảnh sản phẩm 3
//           </label>
//           <input
//             id="image3"
//             type="text"
//             {...register("image3")}
//             className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
//             placeholder="Ảnh sản phẩm 3"
//           />
//         </div>

//         <div>
//           <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//             Giá sản phẩm
//           </label>
//           <input
//             id="price"
//             type="text"
//             {...register("price", { required: true, pattern: /^\d*$/ })}
//             className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
//               errors.price ? "border-red-500" : ""
//             }`}
//             placeholder="Giá sản phẩm"
//           />
//           {errors.price && (
//             <p className="text-red-600 text-xs mt-1">
//               Giá phải là số và không âm
//             </p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
//             Giá Sale
//           </label>
//           <input
//             id="salePrice"
//             type="text"
//             {...register("salePrice", { required: true, pattern: /^\d*$/ })}
//             className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
//               errors.salePrice ? "border-red-500" : ""
//             }`}
//             placeholder="Giá Sale"
//           />
//           {errors.salePrice && (
//             <p className="text-red-600 text-xs mt-1">
//               Giá phải là số và không âm
//             </p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//             Danh mục
//           </label>
//           <select
//             id="category"
//             {...register("categoryId", { required: true })}
//             className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
//               errors.categoryId ? "border-red-500" : ""
//             }`}
//           >
//             <option value="">Chọn danh mục</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//           {errors.categoryId && (
//             <p className="text-red-600 text-xs mt-1">
//               Danh mục không được để trống
//             </p>
//           )}
//         </div>

//         <div className="space-x-2 m-0">
//           <label htmlFor="sale" className="text-sm font-medium text-gray-700">
//             Sale:
//           </label>
//           <input
//             id="sale"
//             type="checkbox"
//             {...register("sale")}
//             className="h-4 w-4 text-indigo-600 border-gray-300 w-[40%] rounded"
//           />
//         </div>

//         <div>
//           <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//             Giới thiệu sản phẩm
//           </label>
//           <textarea
//             id="about"
//             {...register("about", { required: true })}
//             className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
//               errors.about ? "border-red-500" : ""
//             }`}
//             placeholder="Giới thiệu sản phẩm"
//           />
//           {errors.about && (
//             <p className="text-red-600 text-xs mt-1">
//               Giới thiệu không được để trống
//             </p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="discription" className="block text-sm font-medium text-gray-700">
//             Mô tả sản phẩm
//           </label>
//           <textarea
//             id="discription"
//             {...register("discription", { required: true })}
//             className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
//               errors.discription ? "border-red-500" : ""
//             }`}
//             placeholder="Mô tả sản phẩm"
//           />
//           {errors.discription && (
//             <p className="text-red-600 text-xs mt-1">
//               Mô tả không được để trống
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
         
//           className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
//         >
//           Thêm mới
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formType } from "../../interface/Product";
import { useNavigate } from "react-router-dom";
import { productCT } from "../../context/productContext";
import { ICategory } from "../../interface/Category";
import { GetAllCategory } from "../../service/category";

const AddProduct: React.FC = () => {
  const { onAdd } = useContext(productCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formType>();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async () => {
      const categoryData = await GetAllCategory();
      setCategories(categoryData);
    })();
  }, []);

  const onSubmit = async (formData: formType) => {
    const newProduct = {
      ...formData,
      reviews: [],
      order: 0, // Initialize reviews to an empty array and order to 0
    };
    await onAdd(newProduct);
    navigate("/admin");
    reset();
  };

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4">Thêm mới sản phẩm</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Tên sản phẩm
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true, minLength: 6 })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Tên sản phẩm"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">
              Tên không được để trống và nhỏ hơn 6 ký tự
            </p>
          )}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Ảnh sản phẩm 1
          </label>
          <input
            id="image"
            type="text"
            {...register("image")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 1"
          />
        </div>

        <div>
          <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
            Ảnh sản phẩm 2
          </label>
          <input
            id="image2"
            type="text"
            {...register("image2")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 2"
          />
        </div>

        <div>
          <label htmlFor="image3" className="block text-sm font-medium text-gray-700">
            Ảnh sản phẩm 3
          </label>
          <input
            id="image3"
            type="text"
            {...register("image3")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 3"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Giá sản phẩm
          </label>
          <input
            id="price"
            type="text"
            {...register("price", { required: true, pattern: /^\d*$/ })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.price ? "border-red-500" : ""
            }`}
            placeholder="Giá sản phẩm"
          />
          {errors.price && (
            <p className="text-red-600 text-xs mt-1">
              Giá phải là số và không âm
            </p>
          )}
        </div>

        <div>
          <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
            Giá Sale
          </label>
          <input
            id="salePrice"
            type="text"
            {...register("salePrice", { required: true, pattern: /^\d*$/ })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.salePrice ? "border-red-500" : ""
            }`}
            placeholder="Giá Sale"
          />
          {errors.salePrice && (
            <p className="text-red-600 text-xs mt-1">
              Giá phải là số và không âm
            </p>
          )}
        </div>

        <div>
          <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
            Danh mục
          </label>
          <select
            id="categoryId"
            {...register("categoryId", { required: true })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.categoryId ? "border-red-500" : ""
            }`}
          >
            <option value="">Chọn danh mục</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-red-600 text-xs mt-1">
              Danh mục không được để trống
            </p>
          )}
        </div>

        <div className="space-x-2 m-0">
          <label htmlFor="sale" className="text-sm font-medium text-gray-700">
            Sale:
          </label>
          <input
            id="sale"
            type="checkbox"
            {...register("sale")}
            className="h-4 w-4 text-indigo-600 border-gray-300 w-[40%] rounded"
          />
        </div>

        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            Giới thiệu sản phẩm
          </label>
          <textarea
            id="about"
            {...register("about", { required: true })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.about ? "border-red-500" : ""
            }`}
            placeholder="Giới thiệu sản phẩm"
          />
          {errors.about && (
            <p className="text-red-600 text-xs mt-1">
              Giới thiệu không được để trống
            </p>
          )}
        </div>

        <div>
          <label htmlFor="discription" className="block text-sm font-medium text-gray-700">
            Mô tả sản phẩm
          </label>
          <textarea
            id="discription"
            {...register("discription", { required: true })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.discription ? "border-red-500" : ""
            }`}
            placeholder="Mô tả sản phẩm"
          />
          {errors.discription && (
            <p className="text-red-600 text-xs mt-1">
              Mô tả không được để trống
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Thêm mới
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
