import { Instagram, MessageCircle } from "lucide-react"

export interface Social<TIcon = React.ComponentType<any>> {
  label: string
  href: string
  Icon: TIcon
}

export const NavItems = {
  brand: "neomediakey",
  links: ["Why us" , "Shorts", "Long form" ],
  cta: "Book a Call",
  socials: [
    {
      label: "Instagram",
      href: "#",
      Icon: Instagram,
    },
    {
      label: "Whatsapp",
      href: "#",
      Icon: MessageCircle,
    },
  ] satisfies Social[],
} as const

export const SHADERCONFIG = {
  color : "#000000",
  spread : 0.5,
  speed : 2
};