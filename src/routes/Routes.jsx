import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "../pages/menu/Menu";
import { We } from "../pages/we/We.jsx";
import { Reserve } from "../pages/reserve/Reserve";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/we" element={<We />} />
      <Route path="/reserve" element={<Reserve />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
