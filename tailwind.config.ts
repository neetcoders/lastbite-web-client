import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: ["80px", "96px"],
      h2: ["72px", "90px"],
      h3: ["64px", "84px"],
      h4: ["48px", "64px"],
      h5: ["32px", "48px"],
      h6: ["24px", "32px"],
      title: ["20px", "24px"],
      paragraph: ["18px", "24px"],
      bodytext: ["16px", "24px"],
      caption: ["14px", "24px"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "success-light": "#E5FDC5",
        "success-active": "#BAF270",
        "success-main": "#96dd38",
        "success-hover": "#74B81B",
        "success-dark": "#52870E",
        "primary-light": "#C5E7FD",
        "primary-active": "#70BEF2",
        "primary-main": "#389BDD",
        "primary-hover": "#1B79B8",
        "primary-dark": "#0E5687",
        "warning-light": "#FFE5BC",
        "warning-active": "#FFC465",
        "warning-main": "#FAA00F",
        "warning-hover": "#A86800",
        "warning-dark": "#573600",
        "danger-light": "#FDC5CF",
        "danger-active": "#F27086",
        "danger-main": "#DD3854",
        "danger-hover": "#B81B35",
        "danger-dark": "#870E22",
        "typo-white": "#ffffff",
        "typo-outline1": "#808080",
        "typo-outline2": "#E5E5E6",
        "typo-inline": "#959698",
        "typo-secondary": "#3F3F3F",
        "typo-main": "#212121",
      },
    },
  },
  plugins: [],
};
export default config;
