import { useRef } from "react";

interface IProps {
  onClick(title: string, isComplete: boolean): void;
}
export default ({ onClick }: IProps) => {
  const titleText = useRef("");
  return (
    <div>
      <input
        type={"text"}
        onChange={(e) => (titleText.current = e.target.value)}
        placeholder={"Todo title..."}
      />
      <button onClick={() => onClick(titleText.current, false)}>Add</button>
    </div>
  );
};
