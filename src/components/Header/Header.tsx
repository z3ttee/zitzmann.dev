import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import Logo from "@assets/logo.svg?react";
import { m } from "@/paraglide/messages";
import { cva } from "class-variance-authority";

const headerVariants = cva(
  "z-[999999] sticky top-0 px-6 md:px-12 xl:px-24 py-5 flex items-center w-full bg-natural-100",
  {
    variants: {
      isSticky: {
        true: "border-b border-outline-02",
        false: "",
      },
    },
  },
);

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setIsSticky(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <header className={headerVariants({ isSticky })}>
        <div className="flex items-center grow min-w-0">
          <Link
            className="text-black outline-bracket"
            to="/"
            activeOptions={{ exact: true }}
            aria-label={m.header_nav_home()}>
            <Logo width={36} height={36} aria-hidden />
          </Link>
        </div>

        {/* <nav className="min-w-max">
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
      </nav> */}
      </header>
    </>
  );
}
