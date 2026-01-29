import { Instagram, MessageCircle } from "lucide-react"

export interface Social<TIcon = React.ComponentType<any>> {
  label: string
  href: string
  Icon: TIcon
}

export const NavItems = {
  brand: "neomediakey",
  links: [["Why us","#whyus"] , ["Shorts","#shorts"], ["Long form","longform"] ],
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

export const shorts = [
  ["https://video.wixstatic.com/video/b64a6a_ce8205edd23f4a23b510ed537141defd/1080p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_ce8205edd23f4a23b510ed537141defdf000.jpg/v1/fill/w_116,h_206,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_ce8205edd23f4a23b510ed537141defdf000.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_d871fdb8137c42f4b317568b9a2fb4c0/1080p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_d871fdb8137c42f4b317568b9a2fb4c0f000.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_d871fdb8137c42f4b317568b9a2fb4c0f000.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_f4d515ac273a420da8d226a0b5ae9e4c/1080p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_f4d515ac273a420da8d226a0b5ae9e4cf001.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_f4d515ac273a420da8d226a0b5ae9e4cf001.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_f6eadfdb7aeb41f18f925a01f1c359f5/720p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_f6eadfdb7aeb41f18f925a01f1c359f5f001.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_f6eadfdb7aeb41f18f925a01f1c359f5f001.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_6f630e6d992e4e5e82687499406eb3e0/720p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_6f630e6d992e4e5e82687499406eb3e0f000.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_6f630e6d992e4e5e82687499406eb3e0f000.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_c22e8a2837514962a3480abc8a3040ee/720p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_c22e8a2837514962a3480abc8a3040eef001.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_c22e8a2837514962a3480abc8a3040eef001.jpg"]
]