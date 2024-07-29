import { ICategory } from "../interface/Category"
import instance from "../config/axios"
// import { ICategory } from "../interface/category"
export const GetAllCategory = async ()=>{
    try{
        const {data} = await instance.get('category')
        return data
    }catch(err){
        console.log(err)
    }
}
// eslint-disable-next-line react-refresh/only-export-components
export const deleteCategory = async (id:string)=>{
    try{
        await instance.delete(`category/${id}`); 
      
    }catch(err){
        console.log(err)
    }
}
export const GetCategoryId  = async (id:string)=>{
    try{
        const {data} = await instance.get(`category/${id}`)
        return data
    }catch(err){
        console.log(err)
    }
 }

export const EditCategory = async ( formcategory:ICategory,id:string)=>{
    try{
        const {data} = await instance.put(`category/${id}`, formcategory)
        return data
    }catch(err){
        console.log(err)
    }
}
 export const AddCategory = async (formcategory:ICategory)=>{
    try{
        const {data} = await instance.post('category', formcategory)
        return data
    }catch(err){
        console.log(err)
    }
 }
