import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    <div>
      <h1>Layout Wrapper</h1>
      <Outlet />
    </div>
  );
}
