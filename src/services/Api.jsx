import axios from "axios";

function Api(baseURL){
    const api = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/${baseURL}`,
    })

    api.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    api.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });


    return api
}

export default Api