import React, { useContext, useEffect } from "react";
import { CategoryCT } from "../../context/categoryContext";
import { ICategory } from "../../interface/Category";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {  GetCategoryId } from "../../service/category";

const EditCategory: React.FC = () => {
  const { onSubmitUpdate } = useContext(CategoryCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const cate = async () => {
        if (id) {
          try {
            const category = await GetCategoryId(id);
            reset({
              name: category.name,
              banner: category.banner,
            });
          } catch (err) {
            console.log(err);
          }
        }
    }
    cate();
  },[id, reset])

  const onSubmit = async (data: ICategory) => {
    try {
      await onSubmitUpdate(data, id);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  }

  return (
    <div className="container mx-auto p-4">
         <h2 className="text-2xl font-bold mb-4">Chỉnh sửa danh muc</h2>
        <form  className="space-y-4 bg-white p-6 rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Tên sản phẩm</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Tên sản phẩm không được để trống", minLength: { value: 6, message: "Tên sản phẩm phải có ít nhất 6 ký tự" } })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.name ? "border-red-500" : ""}`}
            placeholder="Tên sản phẩm"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="banner" className="block text-sm font-medium text-gray-700 ">Ảnh danh muc</label>
          <input
            id="banner"
            type="text"
            {...register("banner")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 1"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Cập nhật
        </button>
        </form>
    </div>
  )
};

export default EditCategory;
