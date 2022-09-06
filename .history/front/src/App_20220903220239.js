import { Routes, Route, Link } from "react-router-dom";
import { UserList } from "./Pages/UserList";
import { UserProfile } from "./Pages/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hola</h2>
      <Routes>
        <Route path="/user-profile" element={<UserList />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
