import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeTransfer Clone | Send Large Files Fast",
  description: "A clone of WeTransfer, the simple, quick and secure way to send your files around the world without an account.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="wetransfer-body antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="wetransfer-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
