import React, { useContext, useEffect } from 'react'
import { CategoryCT } from '../../context/categoryContext'
import { useForm } from 'react-hook-form'
import { ICategory } from '../../interface/Category'
import { useNavigate } from 'react-router-dom'
import { GetAllCategory } from '../../service/category'



const AddCategory: React.FC = () => {
  const {onAdd} = useContext(CategoryCT)
  const{
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>()
  const navigate = useNavigate();
    
  useEffect(()=>{
    (async ()=>{
      const categoryData = await GetAllCategory()
      console.log(categoryData)
    })()
  },[])

  const onSubmit = async (formcategory: ICategory) => {
    await onAdd(formcategory);
    navigate("/admin");
    reset();
  };
  return (
    <div className='container mx-auto p-4'>
      <h2 className="text-2xl font-bold mb-4">Thêm mới danh mục</h2>
      <form action=""
       onSubmit={handleSubmit(onSubmit)}
       className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Tên danh mục
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true, minLength: 6 })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Tên danh mục"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">
              Tên không được để trống và nhỏ hơn 6 ký tự
            </p>
          )}
        </div>
        <div>
          <label htmlFor="banner" className="block text-sm font-medium text-gray-700">
            Ảnh sản phẩm 1
          </label>
          <input
            id="banner"
            type="text"
            {...register("banner")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh danh mục"
          />
        </div>
        <button
          type="submit"
         
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Thêm mới
        </button>
      </form>
    </div>
  )
}

export default AddCategory