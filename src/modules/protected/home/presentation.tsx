import { IHomePresentation } from "./interface";

export default function HomePresentation(state: Readonly<IHomePresentation>) {
  const { title } = state;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
