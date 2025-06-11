import type { Route } from "./+types/home";
import { TodoUseState } from "~/todoUseState/todoUseState";

export function meta({}: Route.MetaArgs) {
  return [{ title: "TODO using useReduce" }];
}

export default function TodoUseStateRoute() {
  return <TodoUseState />;
}
