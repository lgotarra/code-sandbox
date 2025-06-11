import { Todo as TodoReducer } from "components/todoReducer";
import { Todo as TodoState } from "components/todoState";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <TodoReducer />
      </div>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <TodoState />
      </div>
    </main>
  );
}
