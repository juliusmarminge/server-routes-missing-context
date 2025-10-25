import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

export const Route = createFileRoute("/api")({
  server: {
    handlers: {
      GET: async (args) => {
        console.log("[server route] args.context", args.context);
        return json({ foo: args.context.foo });
      },
    },
  },
});
