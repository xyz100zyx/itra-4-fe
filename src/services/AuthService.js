import $api from "../http";

class AuthService{
    static async register(firstName, secondName, email, password){
        return await $api.post('/auth/register', {firstName, secondName, email, password});
    }

    static async login(email, password){
        return await $api.post('/auth/login', {email, password});
    }
}

export default AuthService;