import { Link } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";
import { Divider } from "../Divider";

export function Footer() {
  return (
    <div className="@container px-6 md:px-12 xl:px-24 py-4 xl:py-6 border-t border-outline-02">
      <div className="flex items-stretch w-full gap-4 flex-col @xl:flex-row @xl:gap-12">
        <div className="flex items-center grow min-w-0 text-sm text-black-02 font-extralight @xl:justify-start justify-center">
          <p>&copy; {new Date().getFullYear()} Cedric Zitzmann</p>
        </div>

        <nav className="min-w-max">
          <ul className="flex items-center justify-center @xl:justify-end gap-5">
            <li className="flex items-center">
              <Link className="flex text-sm font-extralight text-black-02 hover:text-black" to="/">
                {m.footer_nav_imprint()}
              </Link>
            </li>
            <Divider />
            <li className="flex items-center">
              <Link className="flex text-sm font-extralight text-black-02 hover:text-black" to="/">
                {m.footer_nav_privacy()}
              </Link>
            </li>
            {/* <Divider />
          <li className="flex items-center">
            <button className="cursor-pointer">
              <img src="/assets/pixelart/sun.svg" alt="Toggle Light Mode" className="w-4 h-4" />
              <img src="/assets/pixelart/moon.svg" alt="Toggle Dark Mode" className="w-4 h-4" />
            </button>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
