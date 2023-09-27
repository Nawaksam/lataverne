import { Routes, Route } from "react-router-dom";
import Landing from "../components/structure/Landing";
import Comptoir from "../components/structure/Comptoir";
import Table from "../components/structure/Table";
import Nope from "../components/structure/Nope";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/comptoir" element={<Comptoir />} />
      <Route path="/table" element={<Table />} />
      <Route path="*" element={<Nope />} />
    </Routes>
  );
}

export default AppRoutes;
