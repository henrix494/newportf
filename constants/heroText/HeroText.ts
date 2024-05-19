import { navBarLinksTypes } from "@/@types/globalTypes";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const navBarLinks: navBarLinksTypes[] = [
  { name: "בית", href: "/" },
  { name: "פרויקטים", href: "/" },
  { name: "צור קשר", href: "/" },
];

export const navBarLinksEn: navBarLinksTypes[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Contact", href: "/" },
];
