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
  speed : 0.1
};

export interface Testimonial {
  name: string
  handle: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Tam Le",
    handle: "Tam Le",
    role: "6 Figure Email Marketing Agency Owner",
    quote: "Worked with Kartik for months and he’s been instrumental in scaling my personal brand. Unlike past experiences, his content agency support has been smooth, reliable, and revision-free."
  },
  {
    name: "Harley",
    handle: "Harley",
    role: "Dating coach",
    quote: "Kartik’s content agency work has been absolutely on point, delivering concise, brand-focused, story-driven reels with minimal revisions. He’s reliable, creative with ideas, and a pleasure to work with, five out of five."
  },
  {
    name: "Mike",
    handle: "Mike",
    role: "One of the Biggest Breathwork coaches(Over 250,000+ subscribers)",
    quote: "As a creator with 250,000+ followers, I’m very selective about outsourcing, and their content agency work has been incredible. They transform simple talking-head videos into engaging, high-quality content with animations and consistent results."
  },
  {
    name: "Siddharth Rai Mangala",
    handle: "Siddharth Rai Mangala",
    role: "Finance Content Creator(100k+ followers)",
    quote: "As a finance content creator, I needed engaging videos with strong content agency support and graphics, and the results have been great in terms of reach and engagement. I’m very satisfied with the work."
  },
  {
    name: "Edwin",
    handle: "Edwin",
    role: "Personal Brand Builder",
    quote: "If you’re serious about building your personal brand, his content agency work is a 10/10 experience. Super communicative, insanely fast, high-quality delivery, and perfectly matches your exact brand style."
  },
  {
    name: "Aimilios",
    handle: "Aimilios",
    role: "6 Figure Agency Owner",
    quote: "We’ve been working together for around eight months, and his content agency work has been the best I’ve experienced. Fast delivery, great style, and most importantly, 100% trustworthy."
  },
  {
    name: "Michael",
    handle: "Michael",
    role: "Mindset coach",
    quote: "Kartik handles all my videos and content, including scripts and ideation, he’s made my life so much easier. Quick, efficient, professional, you won’t regret working with him."
  }
]

export const shorts = [
  ["https://video.wixstatic.com/video/b64a6a_ce8205edd23f4a23b510ed537141defd/1080p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_ce8205edd23f4a23b510ed537141defdf000.jpg/v1/fill/w_116,h_206,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_ce8205edd23f4a23b510ed537141defdf000.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_d871fdb8137c42f4b317568b9a2fb4c0/1080p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_d871fdb8137c42f4b317568b9a2fb4c0f000.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_d871fdb8137c42f4b317568b9a2fb4c0f000.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_f4d515ac273a420da8d226a0b5ae9e4c/1080p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_f4d515ac273a420da8d226a0b5ae9e4cf001.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_f4d515ac273a420da8d226a0b5ae9e4cf001.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_f6eadfdb7aeb41f18f925a01f1c359f5/720p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_f6eadfdb7aeb41f18f925a01f1c359f5f001.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_f6eadfdb7aeb41f18f925a01f1c359f5f001.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_6f630e6d992e4e5e82687499406eb3e0/720p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_6f630e6d992e4e5e82687499406eb3e0f000.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_6f630e6d992e4e5e82687499406eb3e0f000.jpg"],
  ["https://video.wixstatic.com/video/b64a6a_c22e8a2837514962a3480abc8a3040ee/720p/mp4/file.mp4","https://static.wixstatic.com/media/b64a6a_c22e8a2837514962a3480abc8a3040eef001.jpg/v1/fill/w_51,h_91,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/b64a6a_c22e8a2837514962a3480abc8a3040eef001.jpg"]
]