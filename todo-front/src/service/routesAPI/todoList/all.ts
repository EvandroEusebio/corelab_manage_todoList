import axiosInstance from "@/service/api";

const getTodoLists = (query = "") => {
    return axiosInstance.get(`/api/todo?q=${query}`);
}

export default getTodoLists;