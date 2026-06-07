import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { paraglideMiddleware } from "./paraglide/server";

const handler = createStartHandler(defaultStreamHandler);

export default {
  fetch(req: Request) {
    return paraglideMiddleware(req, () => handler(req));
  },
};
