import { Link } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

export function Footer() {
  return (
    <div className="flex items-stretch w-full">
      <div className="flex items-center grow min-w-0">
        <p>&copy; {new Date().getFullYear()} Cedric Zitzmann</p>
      </div>

      <nav className="min-w-max">
        <ul className="flex items-center justify-end gap-4">
          <li>
            <Link className="flex text-sm font-light text-black-01 hover:text-black" to="/">
              {m.footer_nav_imprint}
            </Link>
          </li>
          <span className="text-black-01 font-extralight">/</span>
          <li>
            <Link className="flex text-sm font-light text-black-01 hover:text-black" to="/">
              {m.footer_nav_privacy}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
