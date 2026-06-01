import { Link } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

export function Header() {
  return (
    <div className="flex items-stretch w-full border-b border-outline-02">
      <div className="flex items-center grow min-w-0">
        <Link className="px-6 text-black" to="/" activeOptions={{ exact: true }}>
          <img src="/assets/logo.svg" alt="zitzmann.dev logo" className="inline-block h-6 w-6" />
          zitzmann.dev
        </Link>
      </div>

      <nav className="min-w-max">
        <ul className="flex items-center justify-end">
          <li>
            <Link
              className="relative flex py-3 px-16 text-sm font-light text-black-01 hover:text-black border-l border-outline-02 after:absolute after:top-0 after:left-0 after:size-full after:border-b-3 after:border-black"
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{
                className: "text-black!",
              }}>
              {m.header_nav_home}
            </Link>
          </li>
          <li>
            <Link
              className="flex py-3 px-16 text-sm font-light text-black-01 hover:text-black border-l border-outline-02"
              to="/">
              {m.header_nav_about}
            </Link>
          </li>
          <li>
            <Link
              className="flex py-3 px-16 text-sm font-light text-black-01 hover:text-black border-l border-outline-02"
              to="/">
              {m.header_nav_blog}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
