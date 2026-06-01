import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { getLocale } from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { META_SITE_URL } from "@/constants";

export const Route = createRootRoute({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", getLocale());
    }
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: m.meta_title(),
      },
      {
        name: "description",
        content: m.meta_description(),
      },
      {
        property: "og:site_name",
        content: m.meta_site_name(),
      },
      {
        property: "og:url",
        content: META_SITE_URL,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: m.meta_title(),
      },
      {
        property: "og:description",
        content: m.meta_description(),
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/assets/logo.svg",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="container mx-auto flex flex-col size-full border border-dashed border-t-0 border-b-0 border-outline-02">
          <Header />
          <div className="grow min-h-0">{children}</div>
          <Footer />
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
