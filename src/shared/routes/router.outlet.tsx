import { BrowserRouter } from "react-router-dom";

import CommonOutlet from "./common.outlet";
import ProtectedOutlet from "./protected.outlet";

export default function Outlet() {
  const userAuthenticated = false;

  return (
    <BrowserRouter>
      {userAuthenticated && <ProtectedOutlet />}
      {!userAuthenticated && <CommonOutlet />}
    </BrowserRouter>
  );
}
