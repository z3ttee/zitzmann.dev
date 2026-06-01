import {
  CURRENT_EMPLOYER_LINK,
  SOCIAL_EMAIL_LINK,
  SOCIAL_GITHUB_LINK,
  SOCIAL_LINKEDIN_LINK,
} from "@/constants";
import { m } from "@/paraglide/messages";
import { ParaglideMessage } from "@inlang/paraglide-js-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-24">
      <h1 className="text-display-lg font-bold">{m.page_home_landing_title()}</h1>
      <p className="text-black-01 mt-2 max-w-[800px]">
        <ParaglideMessage
          message={m.page_home_landing_description}
          markup={{
            a: ({ children }) => (
              <a
                href={CURRENT_EMPLOYER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline-offset-4 hover:underline">
                {children}
              </a>
            ),
          }}
        />
      </p>

      <div className="mt-24">
        <h6 className="flex items-center justify-start gap-6 text-md font-normal text-black tracking-tight">
          {m.page_home_connect_title()}{" "}
          <span className="inline-block border-t border-t-outline-02 border-dashed h-0 grow" />
        </h6>
        <ul className="flex gap-2 mt-4">
          <li>
            <a
              tabIndex={0}
              className="cursor-pointer flex items-center justify-start gap-3 border border-outline-02 p-4 w-[350px] hover:bg-natural-100 active:border-outline-01"
              aria-labelledby="linkedin-link-details"
              href={SOCIAL_LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/assets/linkedin-pixelart.svg" alt="LinkedIn Logo" className="w-9 h-9" />
              <div id="linkedin-link-details">
                <p className="text-black text-sm font-medium">
                  {m.page_home_connect_linkedin_title()}
                </p>
                <p className="text-black-02 font-extralight text-xs">
                  {m.page_home_connect_linkedin_subtitle()}
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              tabIndex={0}
              className="cursor-pointer flex items-center justify-start gap-3 border border-outline-02 p-4 w-[350px] hover:bg-natural-100 active:border-outline-01 focus-visible:outline-2 focus-visible:outline-offset-0"
              aria-labelledby="github-link-details"
              href={SOCIAL_GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/assets/github-pixelart.svg" alt="GitHub Logo" className="w-9 h-9" />
              <div id="github-link-details">
                <p className="text-black text-sm font-medium">
                  {m.page_home_connect_github_title()}
                </p>
                <p className="text-black-02 font-extralight text-xs">
                  {m.page_home_connect_github_subtitle()}
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              tabIndex={0}
              className="cursor-pointer flex items-center justify-start gap-3 border border-outline-02 p-4 w-[350px] hover:bg-natural-100 active:border-outline-01 focus-visible:outline-2 focus-visible:outline-offset-0"
              aria-labelledby="email-link-details"
              href={SOCIAL_EMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/assets/mail-pixelart.svg" alt="E-Mail Logo" className="w-9 h-9" />
              <div id="email-link-details">
                <p className="text-black text-sm font-medium">
                  {m.page_home_connect_email_title()}
                </p>
                <p className="text-black-02 font-extralight text-xs">
                  {m.page_home_connect_email_subtitle()}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
