import type { TodoListItem } from "./todoReducer";

export type TodoItemProps = {
  todo: TodoListItem;
  onToggle: () => void;
  onRemove: () => void;
};

export const TodoItem = ({
  todo,
  onToggle,
  onRemove,
}: TodoItemProps): React.JSX.Element => {
  return (
    <div
      key={todo.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "8px",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "8px",
        }}
      >
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <p style={{ padding: "0px 10px" }}>{todo.task}</p>
      </span>

      <button
        onClick={onRemove}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          backgroundColor: "#AAAAAA",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};
