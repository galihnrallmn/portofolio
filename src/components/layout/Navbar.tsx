import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

import Button from "@/components/shared/Button";
import SmartImage from "@/components/shared/SmartImage";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrolled = useScroll();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          layout
          transition={{ duration: 0.25 }}
          className={`mt-4 flex items-center justify-between rounded-full border px-5 transition-all duration-300 ${
            scrolled
              ? `h-14 border-white/30 bg-white/80 shadow-2xl backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-900/80`
              : `h-16 border-white/20 bg-white/60 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60`
          } `}
        >
          {/* Logo */}

          <Link
            to="home"
            smooth
            duration={500}
            className="flex cursor-pointer items-center gap-3"
          >
            <SmartImage
              src={siteConfig.avatar}
              alt={siteConfig.name}
              className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
            />

            <span className="hidden font-bold text-slate-800 sm:block dark:text-white">
              {siteConfig.shortName}
            </span>
          </Link>

          {/* Desktop Menu */}

          <nav role="navigation" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                offset={-80}
                duration={500}
                activeClass="text-blue-600"
                className="cursor-pointer font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden"
            >
              {open ? (
                <HiOutlineXMark size={28} />
              ) : (
                <HiOutlineBars3 size={28} />
              )}
            </Button>
          </div>
        </motion.div>

        {/* Mobile */}

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              layout
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:hidden dark:border-slate-700 dark:bg-slate-900/95"
            >
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
