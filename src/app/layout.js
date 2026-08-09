import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Bollareddy Pranoy Raj — Portfolio",
  description: "B.Tech Computer Science student specializing in scalable web applications and backend engineering. Full Stack Developer & Problem Solver.",
  keywords: ["Bollareddy Pranoy Raj", "Pranoy Raj", "Portfolio", "Full Stack Developer", "Software Engineer", "Java", "React", "Next.js"],
  openGraph: {
    title: "Bollareddy Pranoy Raj — Portfolio",
    description: "B.Tech Computer Science student specializing in scalable web applications and backend engineering.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body bg-[#07070a] text-gray-300 min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
