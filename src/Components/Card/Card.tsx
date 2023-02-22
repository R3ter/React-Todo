interface IProps {
  title: string;
  isComplete: boolean;
  onComplete(index: number): void;
  index: number;
  remove(index: number): void;
}
export default ({ title, isComplete, onComplete, remove, index }: IProps) => {
  return (
    <div style={{ backgroundColor: "gray", cursor: "pointer" }}>
      <p
        onClick={() => {
          onComplete(index);
        }}
      >
        title: {title}
      </p>
      <p
        onClick={() => {
          onComplete(index);
        }}
      >
        Is completed: {isComplete + ""}
      </p>
      <button
        onClick={() => {
          remove(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};
