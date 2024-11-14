import { PropsWithChildren } from "react";
import { SessionProvider } from "./session/session.ctx";

export default function Providers({ children }: Readonly<PropsWithChildren>) {
  return <SessionProvider>{children}</SessionProvider>;
}
