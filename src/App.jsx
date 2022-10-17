import { app } from "./firebaseConfig";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { Login } from "./pages/Login";
import { Events } from "./pages/Events/Events";

import "./App.css";

function App() {
  //Create an environment variable in .env (outside of src) and name it this. Give it a value of the Airtable API key
  const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
  console.log(apiKey);

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
