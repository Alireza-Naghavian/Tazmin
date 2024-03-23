import http from "./httpServices"

export const getCatList = ()=>{
    return http.get("/category/list").then(({ data }) => data.data);
}