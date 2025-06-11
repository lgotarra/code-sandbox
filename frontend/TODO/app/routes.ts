import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("use-state", "./routes/todoUseState.tsx"),
  route("use-reducer", "./routes/todoUseReducer.tsx"),
] satisfies RouteConfig;
