import axios from 'axios';

const apiClient = axios.create({
    baseURL:'http://localhost:5002/api',
    timeout:1000
});

export const login = async (data) => {
    try{
        console.log(data);
        return await apiClient.post('/auth/login',data);
    }catch(exception) {
        return {
            error:true,
            exception,
        }
    }
};

export const register = async (data) => {
    try{
        
        const res = await apiClient.post('/auth/register',data);
        console.log(res);
        return res;
    }catch(exception){
        return {
            error:true,
            exception
        }
    }
};