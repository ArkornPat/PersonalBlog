import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewPostPage from "./pages/ViewPostPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
// import AdminArticleManagementPage from "./pages/admin/AdminArticlePage";
// import AdminCategoryManagementPage from "./pages/admin/AdminCategoryPage";
// import AdminCreateArticlePage from "./pages/admin/AdminCreateArticle";
// import AdminCreateCategoryPage from "./pages/admin/AdminCreateCategoryPage";
// import AdminEditArticlePage from "./pages/admin/AdminEditArticlePage";
// import AdminEditCategoryPage from "./pages/admin/AdminEditCategoryPage";
// import AdminLoginPage from "./pages/admin/AdminLoginPage";
// import AdminNotificationPage from "./pages/admin/AdminNotificationPage";
// import AdminProfilePage from "./pages/admin/AdminProfilePage";
// import AdminResetPasswordPage from "./pages/admin/AdminResetPasswordPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<ViewPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
