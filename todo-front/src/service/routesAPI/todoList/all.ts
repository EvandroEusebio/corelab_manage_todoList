import axiosInstance from "@/service/api";

const getTodoLists = () => {
    return axiosInstance.get('/api/todo');
}

export default getTodoLists;