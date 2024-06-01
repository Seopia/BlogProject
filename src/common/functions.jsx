import { jwtDecode } from "jwt-decode";

export const LoginTest = (callback) => {
    if(localStorage.getItem('token')){
        const decode = jwtDecode(localStorage.getItem('token'))
        return decode;
    } else {
        alert('로그인 해주세요!');
        callback();
    }
}