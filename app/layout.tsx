import "@/styles/globals.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full justify-center text-center flex flex-col py-3">
              <div className="flex justify-center">
                <Link
                  className="m-4"
                  href="https://github.com/ashkgabriel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="dark:text-zinc-300 text-zinc-600 h-8 w-8"
                    icon={faGithub}
                  />
                </Link>
                <Link
                  className="m-4"
                  href="https://linkedin.com/in/gabriel-fortes-ashikaga"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="dark:text-zinc-300 text-zinc-600 h-8 w-8"
                    icon={faLinkedin}
                  />
                </Link>
              </div>
              <div>
                <p>
                  &copy; {new Date().getFullYear()}{" "}
                  <span className="font-bold">{siteConfig.name}</span>
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
