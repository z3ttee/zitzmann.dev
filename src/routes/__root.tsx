import { HeadContent, Scripts, createRootRoute, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { getLocale, shouldRedirect } from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";
import appCss from "../styles.css?url";
import { Footer, Header } from "@/components";
import { META_SITE_URL } from "@/constants";
import { RICH_RESULT_PERSON, RICH_RESULT_PROFESSIONAL_SERVICE } from "@/seo/richResults";
import { generateMainTags } from "@/seo/tagsGeneration";

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
  head: () => {
    return {
      meta: [
        ...generateMainTags(),
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: m.meta_title() },
      ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/assets/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "alternate", hrefLang: "en", href: `${META_SITE_URL}/` },
        { rel: "alternate", hrefLang: "de", href: `${META_SITE_URL}/de/` },
        { rel: "alternate", hrefLang: "x-default", href: `${META_SITE_URL}/` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(RICH_RESULT_PERSON),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(RICH_RESULT_PROFESSIONAL_SERVICE),
        },
      ],
    };
  },
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()} className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="relative flex flex-col min-h-screen pt-6">
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
