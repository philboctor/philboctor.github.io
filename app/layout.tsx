import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phil Boctor | Mechanical Design Portfolio",
  description:
    "Mechanical design portfolio for Phil Boctor, focused on prototypes, testing, and hardware iteration.",
};

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-white/60 bg-paper/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
              <Link className="focus-ring text-sm font-semibold tracking-wide sm:whitespace-nowrap" href="/">
                Philopateer Boctor
              </Link>
              <div className="flex items-center gap-1 text-sm text-muted sm:gap-5">
                {navItems.map((item) => (
                  <Link
                    className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-ink"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
          {children}
          <footer className="border-t border-white/70 bg-white/30">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>Mechanical design through prototype, test, and iteration.</p>
              <div className="flex gap-4">
                <Link className="focus-ring hover:text-ink" href="/projects">
                  Projects
                </Link>
                <Link className="focus-ring hover:text-ink" href="/contact">
                  Contact
                </Link>
                <a className="focus-ring hover:text-ink" href="https://www.linkedin.com/in/phil-boctor/">
                  LinkedIn
                </a>
                <a className="focus-ring hover:text-ink" href="https://github.com/philboctor554">
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
