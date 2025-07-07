import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AddUserPages from "./components/pages/AddUserPage";
import HomePage from "./components/pages/HomePage";
import UserListPage from "./components/pages/UserListPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
    <Toaster richColors position="top-center" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-user" element={<AddUserPages />} />
        <Route path="/user-list" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
