import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>
      <body className={`${roboto.variable} ${poppins.variable}`}>
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
