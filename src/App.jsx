import Footer from "./components/Footer";
import Header from "./components/Header";
import Notification from "./components/Notification";
import { TodoProvider } from "./components/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <Header />
          <main className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <TodoForm />
            <TodoList />
          </main>
          <Footer />
        </div>

        <Notification />
      </div>
    </TodoProvider>
  );
}

export default App;
