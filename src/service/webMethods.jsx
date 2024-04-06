import axios from "axios";
// import { Component } from "react";
// import apis from "./apis";
class WebMethods{
    getapi(url){
        return axios.get(url)
    }
    postapi(url,data){
        return axios.post(url,data)
    }
}
export default new WebMethods()