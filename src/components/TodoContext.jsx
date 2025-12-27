import { createContext, useContext, useEffect, useRef, useState } from "react";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [notifications, setNotifications] = useState([]);

  const notificationIdCounter = useRef(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    setTodos([newTodo, ...todos]);

    showNotification("টাস্ক সফলভাবে যোগ করা হয়েছে!", "success");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    showNotification("টাস্ক ডিলিট করা হয়েছে!", "error");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    const todo = todos.find((t) => t.id === id);
    if (todo) {
      showNotification(
        todo.completed
          ? "টাস্ক অসম্পূর্ণ চিহ্নিত করা হয়েছে!"
          : "টাস্ক সম্পূর্ণ চিহ্নিত করা হয়েছে!",
        "success"
      );
    }
  };

  const clearAllTodos = () => {
    setTodos([]);
    showNotification("সব টাস্ক ডিলিট করা হয়েছে!", "error");
  };

  const generateUniqueId = () => {
    notificationIdCounter.current += 1;
    return Date.now() + notificationIdCounter.current + Math.random();
  };

  const showNotification = (message, type = "info") => {
    const id = generateUniqueId();
    const newNotification = {
      id,
      message,
      type,
    };

    setNotifications((prev) => [...prev, newNotification]);

    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const todoContextValue = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearAllTodos,
    showNotification,
  };

  const notificationContextValue = {
    notifications,
    showNotification,
    removeNotification,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      <NotificationContext.Provider value={notificationContextValue}>
        {children}
      </NotificationContext.Provider>
    </TodoContext.Provider>
  );
};
