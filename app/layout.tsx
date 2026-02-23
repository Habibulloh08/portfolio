import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackgroundBeams } from "@/components/background-beams"

const inter = Inter({ subsets: ["latin"] })

const setInitialTheme = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  } catch(e) {}
})();
`;

export const metadata: Metadata = {
  title: "Habibulloh Karimov - Frontend Developer",
  description: "ReactJS Team Lead Developer specializing in modern web applications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider defaultTheme="dark">
          <BackgroundBeams />
          <Navigation />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
