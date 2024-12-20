import localFont from "next/font/local";
import "./globals.css";
import CursorFollow from "@/components/ui/CursorFollow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AnimatedBackground />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CursorFollow />
        <BackToTop />
      </body>
    </html>
  );
}
