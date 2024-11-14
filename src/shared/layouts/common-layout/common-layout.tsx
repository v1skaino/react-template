import Outlet from "../../routes/router.outlet";

export default function CommonLayout() {
  return (
    <div>
      <h1>Layout Wrapper</h1>
      <Outlet />
    </div>
  );
}
