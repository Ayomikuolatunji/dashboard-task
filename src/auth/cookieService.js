import Cookies from 'universal-cookie';

const cookies = new Cookies();


class CookiesClass{


    get(key){
       return cookies.get(key);
    }

    set(key,value,options){
        cookies.set(key,value,options);
    }

    remove(key){
        cookies.remove(key);
    }

}

export default new CookiesClass();