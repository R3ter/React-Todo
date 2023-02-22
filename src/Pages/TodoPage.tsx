import { useRef } from "react";
import Cards from "../Components/Cards/Cards";
import Input from "../Components/Input/Input";
interface IAddRef {
  current(title: string, isComplete: boolean): void;
}
export default () => {
  const addRef: IAddRef = useRef(() => {});
  return (
    <div style={{ padding: 10 }}>
      <h1>Todo App</h1>
      <Input
        onClick={(title: string, isComplete: boolean) =>
          addRef.current && addRef.current(title, isComplete)
        }
      />
      <Cards AddRefFn={addRef} />
    </div>
  );
};
