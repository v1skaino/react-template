import { useContext } from "react";
import { SessionStateCtx } from "../contexts/session/session.ctx";

export default function useSession() {
  return useContext(SessionStateCtx);
}
