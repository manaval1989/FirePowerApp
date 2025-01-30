import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import NewsDetail from "../pages/NewsDetail";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import MilitaryRanking from "../pages/MilitaryRanking";

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas públicas */}
          <Route index element={<Home />} />
          <Route path="ranking" element={<MilitaryRanking />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />

          {/* Ruta para páginas no encontradas */}
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
