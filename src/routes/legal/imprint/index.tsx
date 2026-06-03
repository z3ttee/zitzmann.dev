import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/imprint/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>404</div>;
}
