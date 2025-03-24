import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Advit | Advit Design Studio",
  description: "A place where we build your dreams into reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster position="bottom-right" richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
