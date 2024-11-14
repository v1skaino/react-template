import { createContext, useMemo, useState } from "react";
import { SessionProviderType, SessionStateType } from "./session.type";

export const SessionStateCtx = createContext<SessionStateType>(
  {} as SessionStateType
);

const SessionProvider = ({ children }: SessionProviderType) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const sessionProviderValues: SessionStateType = useMemo(
    () => ({
      userAuthenticated,
      setUserAuthenticated,
    }),
    [userAuthenticated, setUserAuthenticated]
  );

  return (
    <SessionStateCtx.Provider value={sessionProviderValues}>
      {children}
    </SessionStateCtx.Provider>
  );
};

export { SessionProvider };
