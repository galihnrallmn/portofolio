import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-scroll";
import ThemeToggle from "@/components/shared/ThemeToggle";

const menus = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="
          mt-4
          flex
          h-16
          items-center
          justify-between
          rounded-full
          border
          border-white/20
          bg-white/70
          px-4
          shadow-lg
          backdrop-blur-xl
          "
        >
          {/* Logo */}
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden gap-8 md:flex">
            {menus.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                spy
                offset={-80}
                duration={500}
                activeClass="text-blue-600"
                className="
                cursor-pointer
                capitalize
                font-medium
                text-slate-700
                transition
                hover:text-blue-600
                "
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <HiOutlineXMark size={30} /> : <HiOutlineBars3 size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
            mt-3
            rounded-3xl
            border
            border-white/20
            bg-white/90
            p-5
            shadow-xl
            backdrop-blur-xl
            md:hidden
            "
          >
            {menus.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="
                block
                cursor-pointer
                py-3
                capitalize
                text-slate-700
                hover:text-blue-600
                "
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
