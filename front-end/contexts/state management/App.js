import React from "react";
import ContextProvider from "./context/ContextProvider";
import { useAuth } from "./context/AuthContext";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
};

const HomePage = () => {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen p-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold">Welcome {user ? user.name : "Guest"}!</h1>
      {user ? (
        <button onClick={logout} className="mt-3 px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      ) : (
        <button onClick={() => login({ name: "John Doe" })} className="mt-3 px-4 py-2 bg-green-500 text-white rounded">
          Login
        </button>
      )}
      <button onClick={toggleTheme} className="mt-3 ml-3 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
