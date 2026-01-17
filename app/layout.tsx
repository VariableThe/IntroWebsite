import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya | Portfolio",
  description: "Developer Portfolio of Aditya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased text-foreground bg-transparent font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <InteractiveBackground />

          <nav className="fixed top-6 right-6 z-50">
            <div className="bg-background/80 backdrop-blur-md border border-border rounded-full p-2 shadow-lg">
              <ThemeToggle />
            </div>
          </nav>
          <main className="pt-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
