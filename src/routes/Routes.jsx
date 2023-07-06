import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "../pages/menu/Menu";
import { Nosotros } from "../pages/nosotros/Nosotros";
import { Reserve } from "../pages/reserve/Reserve";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/reserve" element={<Reserve />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
