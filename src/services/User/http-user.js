import { BASE_API, HTTP_USER } from './../config';
import HttpBase from '../http-base';

class HttpUser {
    async login(params){
        try {
            const url  = `${ BASE_API }${ HTTP_USER.getLogin }`
            const config = {
                header: {},
                params
            }
            console.log(url);
            const data = await HttpBase.baseGetParams(url, config);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpUser;