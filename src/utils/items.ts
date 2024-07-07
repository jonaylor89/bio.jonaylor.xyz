import { ItemType } from "linkees/ts";
import { CHANNEL_TYPES } from "linkees";

export const items: ItemType[] = [
  {
    title: "Website",
    subtitle: "Look at my work!",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://jonaylor.xyz", //your personal website or portfolio  link
  },
  {
    title: "Blog",
    subtitle: "The latest content for what I've written",
    type: CHANNEL_TYPES.OTHER,
    image: "/assets/blog.png",
    link: "https://blog.jonaylor.xyz", // Blog link
  },
  {
    title: "GitHub",
    subtitle: "@jonaylor89 | 🏠 of my open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/jonaylor89", //Github Profile link
  },
  {
    title: "Tapped Ai",
    subtitle: "the leading live music database",
    type: CHANNEL_TYPES.WEBSITE,
    image: "/assets/tapped.png",
    link: "https://tapped.ai",
  },
  {
    title: "In The Loop",
    subtitle: "The platform tailored for artists and producers to collaborate",
    type: CHANNEL_TYPES.WEBSITE,
    image: "/assets/intheloop.png",
    link: "https://intheloopstudio.com", // In The Loop landing page
  },
  {
    title: "Apps",
    subtitle: "Hub of my awesome 🔥 Apps",
    type: CHANNEL_TYPES.OTHER,
    image: "/assets/playstore.png",
    link: "https://play.google.com/store/apps/developer?id=John+Naylor", // google play linik
  },
  {
    title: "Twitter",
    subtitle: "@jonaylor89 | Don't forget to follow me 😉",
    type: CHANNEL_TYPES.TWITTER,
    link: "https://twitter.com/jonaylor89", // twitter profile link
  },
  {
    title: "LinkedIn",
    subtitle: "Connect with me on LinkedIn",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/john-naylor", // linkedin profile link
  },
  {
    title: "Telegram",
    subtitle: "@jonaylor89 | Let's chat!",
    type: CHANNEL_TYPES.TELEGRAM,
    link: "https://telegram.me/jonaylor89", // telegram profile link
  },
];
