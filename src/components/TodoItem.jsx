import React from "react";
import { useTodo } from "./TodoContext";
import CustomButton from "./CustomButton";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodo();

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
        todo.completed
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-200 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            todo.completed
              ? "bg-green-500 border-green-500"
              : "border-gray-400 hover:border-green-500"
          }`}
        >
          {todo.completed && <span className="text-white text-sm">✓</span>}
        </button>
        <div>
          <p
            className={`font-medium ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.text}
          </p>
          <p className="text-xs text-gray-500 mt-1">তৈরি: {todo.createdAt}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <CustomButton
          variant={todo.completed ? "secondary" : "success"}
          size="small"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? "অসম্পূর্ণ করুন" : "সম্পূর্ণ করুন"}
        </CustomButton>
        <CustomButton
          variant="error"
          size="small"
          onClick={() => deleteTodo(todo.id)}
        >
          ডিলিট
        </CustomButton>
      </div>
    </div>
  );
};

export default TodoItem;
