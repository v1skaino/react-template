import { Navigate, Route, Routes } from "react-router-dom";
import HomeContainer from "../../modules/protected/home/container";
import ProtectedLayout from "../layouts/protected-layout/protected-layout";

export default function ProtectedOutlet() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomeContainer />} />
      </Route>
    </Routes>
  );
}
