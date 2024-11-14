import Outlet from "../../routes/router.outlet";

export default function ProtectedLayout() {
  return (
    <div>
      <h1>Layout Wrapper</h1>
      <Outlet />
    </div>
  );
}
