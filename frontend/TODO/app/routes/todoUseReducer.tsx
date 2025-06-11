import type { Route } from "./+types/home";
import { TodoUseReducer } from "~/todoUseReducer/todoUseReducer";

export function meta({}: Route.MetaArgs) {
  return [{ title: "TODO using useReduce" }];
}

export default function TodoUseReducerRoute() {
  return <TodoUseReducer />;
}
