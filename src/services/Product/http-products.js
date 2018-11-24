import { BASE_API, HTTP_PRODUCT } from './../config';
import httpBase from '../http-base';

class HttpProduct {

    async getProducts(){
        try {
            const url  = `${ BASE_API }${ HTTP_PRODUCT.getProducts }`
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductsById(id){
        try {
            const url  = `${ BASE_API }${ HTTP_PRODUCT.getProducts }/${id}`;
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpProduct;