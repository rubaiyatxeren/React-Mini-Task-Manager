import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useTodo } from "./TodoContext";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodo();
  const { showNotification } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      showNotification("দয়া করে একটি টাস্ক লিখুন!", "error");
      return;
    }
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="আপনার নতুন টাস্ক লিখুন..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <CustomButton
          type="submit"
          variant="primary"
          size="large"
          fullWidth={false}
        >
          টাস্ক যোগ করুন
        </CustomButton>
      </div>
    </form>
  );
};

export default TodoForm;
