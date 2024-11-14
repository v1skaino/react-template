import { BrowserRouter } from "react-router-dom";

import useSession from "../hooks/useSession";
import CommonOutlet from "./common.outlet";
import ProtectedOutlet from "./protected.outlet";

export default function Outlet() {
  const { userAuthenticated } = useSession();

  return (
    <BrowserRouter>
      {userAuthenticated && <ProtectedOutlet />}
      {!userAuthenticated && <CommonOutlet />}
    </BrowserRouter>
  );
}
