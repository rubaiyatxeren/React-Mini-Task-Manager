import React from "react";
import CustomButton from "./CustomButton";
import { useTodo } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, clearAllTodos } = useTodo();

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          কোনো টাস্ক নেই!
        </h3>
        <p className="text-gray-500">একটি নতুন টাস্ক যোগ করুন শুরু করতে।</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">
          আপনার টাস্কগুলি ({todos.length})
        </h2>
        {todos.length > 0 && (
          <CustomButton variant="error" size="small" onClick={clearAllTodos}>
            সব ডিলিট করুন
          </CustomButton>
        )}
      </div>

      {pendingTodos.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium text-gray-700">
            অসম্পূর্ণ টাস্ক ({pendingTodos.length})
          </h3>
          <div className="space-y-3">
            {pendingTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium text-gray-700">
            সম্পূর্ণ টাস্ক ({completedTodos.length})
          </h3>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {todos.length}
            </div>
            <div className="text-sm text-gray-600">মোট টাস্ক</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {completedTodos.length}
            </div>
            <div className="text-sm text-gray-600">সম্পূর্ণ</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {pendingTodos.length}
            </div>
            <div className="text-sm text-gray-600">অসম্পূর্ণ</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold">
              {todos.length > 0
                ? `${Math.round((completedTodos.length / todos.length) * 100)}%`
                : "0%"}
            </div>
            <div className="text-sm text-gray-600">সম্পূর্ণতা</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
