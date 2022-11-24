import $api from "../http";

class UsersService{
    static async fetchUsers(){
        return await $api.get('/getUsers')
    }

    static async deleteUsers(usersId){
        return await $api.delete('/deleteUsers', {data: {usersId}});
    }

    static async blockUsers(usersId){
        return await $api.patch('/blockUsers', {usersId});
    }

    static async unblockUsers(usersId){
        return await $api.patch('/unblockUsers', {usersId});
    }
}

export default UsersService;