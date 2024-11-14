import { Navigate, Route, Routes } from "react-router-dom";
import LoginContainer from "../../modules/common/login/container";
import CommonLayout from "../layouts/common-layout/common-layout";

export default function CommonOutlet() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<LoginContainer />} />
      </Route>
    </Routes>
  );
}
