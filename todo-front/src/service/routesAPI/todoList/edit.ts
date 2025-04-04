import axiosInstance from "@/service/api";
import { TodoListInterface } from "@/types/todo_list_type";

const editTodoList = (data: any, id: number) => {
  return axiosInstance.put(`/api/todo/edit/${id}`, data);
};

export default editTodoList;
