import React, { Dispatch, SetStateAction } from "react";

type SessionStateType = {
  userAuthenticated: boolean;
  setUserAuthenticated: Dispatch<SetStateAction<boolean>>;
};

type SessionProviderType = {
  children: React.ReactNode;
};

export type { SessionProviderType, SessionStateType };
