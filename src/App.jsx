import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import WishListPage from "./pages/WishListPage";
import Bookpage from "./pages/Bookpage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/books/:id" element={<Bookpage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
