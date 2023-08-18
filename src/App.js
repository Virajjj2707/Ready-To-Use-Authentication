import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
   
    <UserAuthContextProvider>
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </UserAuthContextProvider>
  );
}

export default App;