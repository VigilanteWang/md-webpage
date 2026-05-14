import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        mist: "#dbeafe",
        line: "rgba(148, 163, 184, 0.18)",
        panel: "rgba(8, 17, 31, 0.72)",
        glow: "#6ee7f9",
        steel: "#94a3b8",
      },
      boxShadow: {
        panel: "0 20px 60px rgba(2, 6, 23, 0.35)",
        glow: "0 0 0 1px rgba(110, 231, 249, 0.12), 0 24px 80px rgba(14, 165, 233, 0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["'SF Pro Display'", "'Segoe UI Variable'", "'Helvetica Neue'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
