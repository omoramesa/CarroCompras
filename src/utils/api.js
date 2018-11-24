const BASE_API = 'https://shoppingproducts.herokuapp.com';

class Api {

    /**
     * Método para obtener todos los registros de los Productos del servicio
     */
    getProducts(){
        let promise = new Promise( (resolve, reject) => {
            fetch(`${BASE_API}/products`)
            .then( response => response.json())
            .then( data => resolve(data) )
            .catch (error =>{
                reject(error)
            })
            .catch( error => reject(error) )
        });
        return promise;
    }

    getProductsById(id){
        let promise = new Promise( (resolve, reject) => {
            fetch(`${BASE_API}/products/${id}`)
            .then( response => response.json())
            .then( data => resolve(data) )
            .catch (error =>{
                reject(error)
            })
            .catch( error => reject(error) )
        });
        return promise;
    }
}

export default new Api();