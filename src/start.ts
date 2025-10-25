import { createMiddleware, createStart } from "@tanstack/react-start";

const fooMiddleware = createMiddleware().server((args) => {
  return args.next({
    context: {
      foo: "bar",
    },
  });
});

export const startInstance = createStart(() => ({
  requestMiddleware: [fooMiddleware],
}));

declare module "@tanstack/react-router" {
  interface RouterContext {
    foo: string;
  }
}
