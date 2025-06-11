import { useReducer, useState } from "react";
import { TodoItem } from "./todoItem";
import { v4 as uuid } from "uuid";
import { TextInput } from "./textInput";

export type TodoListActions =
  | { type: "ADD_TODO"; payload: { task: string } }
  | { type: "TOGGLE_TODO"; payload: { id: string } }
  | { type: "REMOVE_TODO"; payload: { id: string } };

export type TodoListItem = {
  id: string;
  task: string;
  completed: boolean;
};
const todoListReducer = (state: TodoListItem[], action: TodoListActions) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { task: action.payload.task, completed: false, id: uuid() },
      ];
    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
    case "REMOVE_TODO":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
export function Todo(): React.JSX.Element {
  const [todoListState, todoListDispatch] = useReducer(todoListReducer, [
    { id: "dsfdsfa", task: "Sample Task", completed: true },
  ]);
  const [newItem, setNewItem] = useState<string>("");
  const isInputEmpty = newItem.trim().length === 0;

  const onChangeNewItem = (text: string) => {
    setNewItem(text);
  };

  return (
    <div>
      {todoListState.map((item, _index) => (
        <TodoItem
          key={`task-${item.id}`}
          todo={item}
          onToggle={() =>
            todoListDispatch({ type: "TOGGLE_TODO", payload: { id: item.id } })
          }
          onRemove={() =>
            todoListDispatch({ type: "REMOVE_TODO", payload: { id: item.id } })
          }
        />
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          margin: "8px",
        }}
      >
        <TextInput text={newItem} onChange={onChangeNewItem} />
        <button
          disabled={isInputEmpty}
          onClick={() => {
            todoListDispatch({
              type: "ADD_TODO",
              payload: { task: newItem },
            });
            setNewItem("");
          }}
          style={{
            margin: "0px 10px",
            padding: "8px 16px",
            backgroundColor: isInputEmpty ? "#AAAAAA" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
}
