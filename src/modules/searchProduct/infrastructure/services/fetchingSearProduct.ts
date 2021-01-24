import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.mercadolibre.com'
});

export const getProductByQuery = async (query)=>{
    let response = null ;
    let error = false;
    await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query.productName}`).then((res:any)=>{
        response = res.data;
    }).catch((err)=>{
        console.log(err)
        error=true
    })
    return {response,error};
}

export const getProductById = async (query)=>{
    let response = null ;
    let error = false;
    await axios.get(`https://api.mercadolibre.com/items/${query.productId}`).then((res:any)=>{
        response = res.data;
    }).catch((err)=>{
        error=true
    })
    return {response,error};
}

export const getDescriptionProductById = async (query)=>{
    let response = null ;
    let error = false;
    await axios.get(`https://api.mercadolibre.com/items/${query.productId}/description`).then((res:any)=>{
        response = res.data;
    }).catch((err)=>{
        error=true
    })
    return {response,error};
}

export default axiosInstance;