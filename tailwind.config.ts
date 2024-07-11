// import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
// import { withUt } from "uploadthing/tw";

// export default withUt({
//   content: ["./src/**/*.tsx"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-geist-sans)", ...fontFamily.sans],
//       },
//     },
//   },
//   plugins: [],
// }) satisfies Config;

import { withUt } from "uploadthing/tw";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
});

export default config;
