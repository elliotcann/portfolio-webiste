"use client";

import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#hero"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Scroll to top"
      className={`scroll-top ${visible ? "show" : ""}`}
    >
      <BsArrowUpShort size={24} />
    </a>
  );
}
