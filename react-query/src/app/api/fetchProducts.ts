import axios from 'axios';

export const fetchProducts=async()=>{
    const response= await axios.get("https://fakestoreapi.com/products");
    if(response.data){
        console.log(response.data);
        return response.data;
    }
}