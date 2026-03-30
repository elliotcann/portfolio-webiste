export interface NavItem {
  href: string;
  label: string;
  icon: string; // react-icons bi name
}

export const navItems: NavItem[] = [
  { href: "#hero",      label: "Home",      icon: "BsHouseFill" },
  { href: "#about",     label: "About",     icon: "BsPersonFill" },
  { href: "#portfolio", label: "Portfolio", icon: "BsImages" },
  { href: "#skills",    label: "Skills",    icon: "BsHddStack" },
  { href: "#resume",    label: "CV",        icon: "BsFileEarmarkText" },
  { href: "#thoughts",  label: "Thoughts",  icon: "BsChat" },
  { href: "#contact",   label: "Contact",   icon: "BsEnvelope" },
];
