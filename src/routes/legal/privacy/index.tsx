import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>404</div>;
}
