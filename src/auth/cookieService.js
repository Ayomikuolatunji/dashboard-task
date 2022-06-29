import Cookies from 'universal-cookie';

const cookies = new Cookies();


class CookiesClass{


    get(key){
       return cookies.get(key);
    }
}

export default CookiesClass;