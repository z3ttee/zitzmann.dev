import { LEGAL_SOURCE_LINK, SOCIAL_EMAIL, SOCIAL_EMAIL_LINK } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/imprint/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-6 md:px-12 xl:px-24">
      <h1 className="text-display-lg font-bold">Impressum</h1>

      <ul className="mt-8">
        <li>Cedric Zitzmann</li>
        <li>Flensburger Str. 19</li>
        <li>99085 Erfurt</li>
      </ul>

      <h2 className="text-display-xs font-bold mt-8">Kontakt</h2>
      <ul className="mt-2">
        <li>
          E-Mail:{" "}
          <a className="outline-bracket" href={SOCIAL_EMAIL_LINK}>
            {SOCIAL_EMAIL}
          </a>
        </li>
      </ul>

      <h2 className="text-display-xs font-bold mt-8">Redaktionell verantwortlich</h2>
      <ul className="mt-2">
        <li>Cedric Zitzmann</li>
        <li>Flensburger Str. 19</li>
        <li>99085 Erfurt</li>
      </ul>

      <ul className="mt-16">
        <li>
          Quelle:{" "}
          <a className="outline-bracket" href={LEGAL_SOURCE_LINK}>
            {LEGAL_SOURCE_LINK}
          </a>
        </li>
      </ul>
    </div>
  );
}
