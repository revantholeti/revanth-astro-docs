// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  site: "https://revantholeti.io",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: "Revanth Oleti",
      plugins: [starlightThemeNova()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/revantholeti",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/revanth-oleti/",
        },
        {
          icon: "email",
          label: "Email",
          href: "mailto:oletirevanth@outlook.com",
        },
      ],
      sidebar: [
        { label: "About", link: "/" },
        {
          label: "Projects",
          items: [
            { label: "Dependency Monitor", slug: "projects/dependencymonitor" },
          ],
        },
      ],
    }),
  ],
});
