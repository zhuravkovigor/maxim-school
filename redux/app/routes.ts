import { type RouteConfig, index, route } from "@react-router/dev/routes";
import Basket from "./routes/basket";

export default [
  index("routes/home.tsx"),
  route("/basket", "routes/basket.tsx"),
] satisfies RouteConfig;
