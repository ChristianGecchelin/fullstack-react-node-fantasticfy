import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { UserList } from "./Pages/UserList";
import { UserProfile } from "./Pages/UserProfile";
import { Nav } from "./Components/nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePagee />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
