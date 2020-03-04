import * as axios from 'axios';
import { follow } from '../redux/users_reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL:  "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b748ba77-6052-49e6-ab5b-e3da15aaf5b4"}
});
export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get (`users?page=${currentPage}&count=${pageSize}`)
        .then(response =>{
            return response.data 
        })
        },
    
    follow (userId) {
        return instance.post(`follow/${userId}`)
        },
    unfollow (userId) {
        return instance.delete (`follow/${userId}`)
        },
    getProfile (userId) {
        console.warn('Obsolete method. Please profileAPI object')
            return profileAPI.getProfile(userId);             
            }
        }; 

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/`+ userId)            
        },
    getStatus (userId) {
        return instance.get('profile/status/'+ userId)
        },
    updateStatus (status) {
        return instance.put('profile/status', {status: status});
        }
        };

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }};

