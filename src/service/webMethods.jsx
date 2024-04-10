import axios from "axios";
// import { Component } from "react";
// import apis from "./apis";
class WebMethods{
    getapi(url,token){
        return axios.get(url,{
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
    }
    postapi(url,data){
        return axios.post(url,data)
    }
    postapiwitht(url,data,token){
        return axios.post(url, data, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })}

    putapi(url,data){
      return axios.put(url,data)
    }
    putapiwitht(url,data,token){
      return axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
    }
}
export default new WebMethods()