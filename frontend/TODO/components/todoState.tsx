import { useReducer, useState } from "react";
import { TodoItem } from "./todoItem";
import { v4 as uuid } from "uuid";
import { TextInput } from "./textInput";

export type TodoListItem = {
  id: string;
  task: string;
  completed: boolean;
};

export function Todo(): React.JSX.Element {
  const [items, setItems] = useState<TodoListItem[]>([
    { id: "dsfdsfa", task: "Sample Task", completed: true },
  ]);
  const [newItem, setNewItem] = useState<string>("");
  const isInputEmpty = newItem.trim().length === 0;

  const onChangeNewItem = (text: string) => {
    setNewItem(text);
  };

  const onChangeItem = (id: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const onRemoveItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((item, _index) => (
        <TodoItem
          key={`task-${item.id}`}
          todo={item}
          onToggle={() => onChangeItem(item.id)}
          onRemove={() => onRemoveItem(item.id)}
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
            setItems((prevItems) => [
              ...prevItems,
              { task: newItem, completed: false, id: uuid() },
            ]);
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
