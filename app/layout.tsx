import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elliotcann.com"),
  title: "Elliot Cann | Full Stack Developer",
  description:
    "Full stack developer blending leadership, adaptability, and a passion for technology to build seamless digital experiences.",
  keywords: [
    "Elliot Cann",
    "Full Stack Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Elliot Cann", url: "https://elliotcann.com" }],
  openGraph: {
    title: "Elliot Cann | Full Stack Developer",
    description:
      "Full stack developer blending leadership, adaptability, and a passion for technology.",
    url: "https://elliotcann.com",
    siteName: "Elliot Cann Portfolio",
    type: "website",
    images: [
      {
        url: "/images/profile-img.jpg",
        width: 400,
        height: 400,
        alt: "Elliot Cann",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Elliot Cann | Full Stack Developer",
    description:
      "Full stack developer blending leadership, adaptability, and a passion for technology.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />

        {/* Google Fonts — loaded browser-side, no build-time network dependency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
