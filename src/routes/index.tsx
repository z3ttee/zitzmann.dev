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
    <div className="p-6 md:p-12 xl:p-24">
      <div className="max-w-[1200px]">
        <h1 className="text-display-lg font-extrabold">{m.page_home_landing_title()}</h1>
        <p className="text-black-01 mt-2 max-w-[800px]">
          <ParaglideMessage
            message={m.page_home_landing_description}
            markup={{
              a: ({ children }) => (
                <a
                  href={CURRENT_EMPLOYER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit outline-bracket">
                  {children}
                </a>
              ),
            }}
          />
        </p>
      </div>

      <div className="max-w-[1200px] flex items-center justify-start gap-5 mt-10">
        <a
          tabIndex={0}
          className="cursor-pointer p-1 outline-bracket"
          href={SOCIAL_LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.page_home_connect_linkedin_title()}>
          <img
            src="/assets/linkedin-pixelart.svg"
            alt={m.page_home_connect_linkedin_title()}
            className="w-6 h-6"
          />
        </a>
        <span className="inline-block h-4 w-[1px] bg-black-02 rotate-20"></span>
        <a
          tabIndex={0}
          className="cursor-pointer p-1 outline-bracket"
          href={SOCIAL_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.page_home_connect_github_title()}>
          <img
            src="/assets/github-pixelart.svg"
            alt={m.page_home_connect_github_title()}
            className="w-6 h-6"
          />
        </a>

        <span className="inline-block h-4 w-[1px] bg-black-02 rotate-20"></span>
        <a
          tabIndex={0}
          className="cursor-pointer p-1 outline-bracket"
          href={SOCIAL_EMAIL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.page_home_connect_email_title()}>
          <img
            src="/assets/mail-pixelart.svg"
            alt={m.page_home_connect_email_title()}
            className="w-6 h-6"
          />
        </a>
      </div>

      {/* <div className="mt-26">
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
      </div> */}

      <div className="mt-20">
        <h6 className="flex items-center justify-start gap-6 text-lg font-bold text-black tracking-tight">
          {m.page_home_projects_title()}{" "}
          <span className="inline-block border-t border-t-outline-02 border-dashed h-0 grow" />
        </h6>
        <p className="mt-2 text-black-02 text-sm">{m.page_home_projects_subtitle()}</p>

        <ul className="grid grid-cols-1 lg:grid-cols-2 mt-6 border border-outline-02 max-w-[1200px]">
          <li className="p-4 lg:border-r border-b lg:border-b-0 border-outline-02 hover:bg-natural-100">
            <p className="text-xs text-black-02 tracking-tight">01</p>
            <p className="text-md font-medium tracking-tight">{m.page_home_projects_p01_title()}</p>

            <div className="mt-2">
              <p className="text-sm text-black-01">{m.page_home_projects_p01_description()}</p>
            </div>

            <ul className="flex items-center gap-2 mt-3">
              <li title="TypeScript">
                <img src="/assets/tech/typescript.svg" alt="TypeScript" className="w-5 h-5" />
              </li>
              <li title="Angular">
                <img src="/assets/tech/angular.svg" alt="Angular" className="w-5 h-5" />
              </li>
            </ul>
          </li>
          <li className="p-4 border-0 border-outline-02 hover:bg-natural-100">
            <p className="text-xs text-black-02 tracking-tight">02</p>
            <p className="text-md font-medium tracking-tight">{m.page_home_projects_p02_title()}</p>

            <div className="mt-2">
              <p className="text-sm text-black-01">{m.page_home_projects_p02_description()}</p>
            </div>

            <ul className="flex items-center gap-2 mt-3">
              <li title="C++">
                <img src="/assets/tech/cpp.svg" alt="C++" className="w-5 h-5" />
              </li>
              <li title="Espressif ESP32">
                <img src="/assets/tech/espressif.svg" alt="Espressif ESP32" className="w-5 h-5" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
