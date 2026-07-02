import { useEffect, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("app-scroll-container") as HTMLElement | null;
    const readScrollTop = () => (scrollContainer ? scrollContainer.scrollTop : window.scrollY);
    const onScroll = () => setVisible(readScrollTop() > 320);

    onScroll();

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", onScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const scrollContainer = document.getElementById("app-scroll-container") as HTMLElement | null;

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top-button${visible ? " visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      {"\u2191"}
    </button>
  );
}
