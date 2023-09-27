import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Comptoir from "../pages/Comptoir";
import Table from "../pages/Table";
import Profil from "../pages/Profil";
import Admin from "../pages/Admin";
import Nope from "../components/structure/Nope";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/comptoir" element={<Comptoir />} />
      <Route path="/table" element={<Table />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Nope />} />
    </Routes>
  );
}

export default AppRoutes;
