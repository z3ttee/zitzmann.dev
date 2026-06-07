import { HeadContent, Scripts, createRootRoute, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { getLocale, shouldRedirect } from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";
import appCss from "../styles.css?url";
import { Footer, Header } from "@/components";
import { META_SITE_URL } from "@/constants";

export const Route = createRootRoute({
  beforeLoad: async (req) => {
    const decision = await shouldRedirect({ url: req.location.href });
    if (decision.redirectUrl) {
      throw redirect({ href: decision.redirectUrl.href });
    }

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
        href: "/assets/favicon.svg",
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
    <html lang={getLocale()} className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="relative flex flex-col min-h-screen pt-6 border">
        <Header />
        <main role="main" className="grow pt-20 pb-14">
          {children}
        </main>
        <Footer />
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
