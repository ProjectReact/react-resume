import axios from "axios";


// 定义了一个方法 发送一个请求
export const fetchRepos = ( username ) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
}