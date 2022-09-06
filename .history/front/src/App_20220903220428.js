import { Routes, Route, Link } from "react-router-dom";
import { UserList } from "./Pages/UserList";
import { UserProfile } from "./Pages/UserProfile";
import { Nav } from "./Components/nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/user-profile" element={<UserList />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
