import { LEGAL_SOURCE_LINK, SOCIAL_EMAIL, SOCIAL_EMAIL_LINK } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/imprint/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6 md:p-12 xl:p-24">
      <h1 className="text-display-lg font-bold">Impressum</h1>

      <ul>
        <li>Cedric Zitzmann</li>
        <li>Flensburger Str. 19</li>
        <li>99085 Erfurt</li>
      </ul>

      <h2 className="text-display-xs font-bold">Kontakt</h2>
      <ul>
        <li>
          E-Mail:{" "}
          <a className="outline-bracket" href={SOCIAL_EMAIL_LINK}>
            {SOCIAL_EMAIL}
          </a>
        </li>
      </ul>

      <h2 className="text-display-xs font-bold">Redaktionell verantwortlich</h2>
      <ul>
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
