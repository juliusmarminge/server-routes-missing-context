import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const readContext = createServerFn().handler((args) => {
  console.log("[serverFn] args.context", args.context);
});

export const Route = createFileRoute("/")({
  loader: () => readContext(),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h1>Hello world!</h1>
    </main>
  );
}
