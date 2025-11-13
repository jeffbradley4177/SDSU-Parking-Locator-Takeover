import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

// Navigation bar styles
const NAV_CLASSES = [
  "bg-[var(--component-nav-bg)]",
  "text-[var(--component-nav-text)]",
  "p-[var(--component-nav-padding)]",
  "flex items-center justify-between flex-wrap",
].join(" ");

// Logo/brand styles
const LOGO_CLASSES = [
  "font-bold",
  "text-[length:var(--component-nav-logo-font-size)]",
  "p-[var(--component-nav-padding)]",
  "text-[var(--component-nav-text)] no-underline",
].join(" ");

// Hamburger button styles
const HAMBURGER_CLASSES = [
  "hidden md:hidden",
  "text-[length:var(--component-nav-hamburger-font-size)]",
  "bg-transparent border-0",
  "text-[var(--component-nav-text)] cursor-pointer",
  "ml-auto order-2",
  "max-md:block",
].join(" ");

// Nav links container base styles
const NAV_CONTAINER_BASE = [
  "p-[var(--component-nav-padding)]",
  "mr-[var(--component-nav-padding)]",
  "max-md:order-3 max-md:flex max-md:flex-col",
  "max-md:gap-[var(--component-nav-gap)]",
  "max-md:w-full max-md:mt-[var(--component-nav-gap)]",
  "max-md:overflow-hidden max-md:transition-all max-md:duration-300",
].join(" ");

// Nav link styles
const NAV_LINK_CLASSES = [
  "text-[var(--component-nav-text)]",
  "mx-[var(--component-nav-padding)]",
  "no-underline",
  "hover:text-[var(--component-nav-text-hover)]",
  "max-md:py-[var(--component-nav-gap)] max-md:mx-0",
].join(" ");

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={NAV_CLASSES}>
      {/* Logo */}
      <Link to="/" className={LOGO_CLASSES}>
        SDSU Parking Locator
      </Link>

      {/* Hamburger button */}
      <button className={HAMBURGER_CLASSES} onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      {/* Nav links */}
      <div
        className={cn(
          NAV_CONTAINER_BASE,
          isOpen ? "max-md:max-h-[500px] max-md:opacity-100" : "max-md:max-h-0 max-md:opacity-0"
        )}
      >
        <Link to="/" className={NAV_LINK_CLASSES}>
          Home
        </Link>
        <Link to="/map" className={NAV_LINK_CLASSES}>
          Map
        </Link>
        <Link to="/about" className={NAV_LINK_CLASSES}>
          About
        </Link>
        <Link to="/profile" className={NAV_LINK_CLASSES}>
          Profile
        </Link>
      </div>
    </nav>
  );
}
