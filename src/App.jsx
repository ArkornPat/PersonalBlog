import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Navbar, Footer } from "./components/Header&Footer";
import ViewPostPage from "./pages/ViewPostPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<ViewPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
