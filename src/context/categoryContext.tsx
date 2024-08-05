    import React, { createContext, useEffect, useState } from 'react'
    import { ICategory } from '../interface/Category'
    import { AddCategory, deleteCategory, EditCategory, GetAllCategory } from '../service/category'

    type Props = {
        children: React.ReactNode;
    };

    export const CategoryCT = createContext({} as any)

    const CategoryContext = ({ children } : Props) => {
        const [category,setCategory] = useState<ICategory[]>([])

        useEffect(()=>{
            (async () => {
                const data = await GetAllCategory()
                setCategory(data)
            })();
        },[])

        const onDelete = async(id: string)=>{
            try {
                if(confirm('Are you sure you want to delete?')){
                    await deleteCategory(id)
                    alert('Xóa thành công')
                    setCategory(category.filter((cate:ICategory) => cate.id!==id))
                    window.location.reload()
                }
            } catch (error) {
                console.log(error)
            }
        }

        const onSubmitUpdate = async (formcategory:ICategory,id:string) => {
            try{
                const data = await EditCategory(formcategory,id);
                const newCategory = category.map((cate:ICategory) =>
                    cate.id == id? data : cate
                );
                setCategory(newCategory);
                alert('Cập nhật thành công');
            }catch(err){
                console.log(err);
            }
        }

        const onAdd = async (formcategory:ICategory) =>{
            try{
                const data = await AddCategory(formcategory);
                setCategory([...category, data]);
                console.log(data);
                alert('Thêm mới thành công');
            }catch(errors){
                console.log(errors)
            }
        }
    return (
        <CategoryCT.Provider value={{ category, onDelete, onSubmitUpdate, onAdd }}>
            {children}
        </CategoryCT.Provider>
    )
    }

    export default CategoryContext