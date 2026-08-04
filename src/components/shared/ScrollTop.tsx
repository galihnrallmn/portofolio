import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed right-8 bottom-8 z-50 rounded-full bg-blue-600 p-4 text-white shadow-xl transition hover:bg-blue-700"
    >
      <FaArrowUp />
    </button>
  );
}
