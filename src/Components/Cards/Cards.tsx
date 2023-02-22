import { useState } from "react";
import Card from "../Card/Card";

interface ICardInfo {
  title: string;
  isComplete: boolean;
}
interface IProps {
  AddRefFn: { current: Function | undefined };
}
export default ({ AddRefFn }: IProps) => {
  const [todo, setTodo] = useState<ICardInfo[]>(
    JSON.parse(localStorage.getItem("data") || "[]")
  );
  AddRefFn.current = (title: string, isComplete: boolean) => {
    todo.push({ title, isComplete });
    localStorage.setItem("data", JSON.stringify(todo));
    setTodo([...todo]);
  };
  return (
    <div>
      {todo.map((e, i) => (
        <Card
          remove={(index) => {
            const newData = todo.filter((x, i) => i !== index);
            console.log(newData);
            localStorage.setItem("data", JSON.stringify(newData));
            setTodo(newData);
          }}
          isComplete={e.isComplete}
          key={i}
          index={i}
          title={e.title}
          onComplete={(index) => {
            todo[index].isComplete = true;
            localStorage.setItem("data", JSON.stringify(todo));

            setTodo([...todo]);
          }}
        />
      ))}
    </div>
  );
};
