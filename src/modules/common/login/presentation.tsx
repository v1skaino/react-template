import { ILoginPresentation } from "./interface";

export default function LoginPresentation(state: Readonly<ILoginPresentation>) {
  const { title } = state;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
