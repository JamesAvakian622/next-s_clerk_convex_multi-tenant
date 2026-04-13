import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jobly | The Premium Talent Marketplace",
  description:
    "Connect with high-caliber opportunities or find the elite talent your company needs. Real-time hiring, multi-tenant workspaces, and secure billing.",
  icons: {
    icon: "/convex.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ClerkProvider
          dynamic
          appearance={{
            cssLayerName: "clerk",
            variables: {
              colorPrimary: "var(--terracotta)",
              colorBackground: "var(--background)",
              colorForeground: "var(--foreground)",
              colorPrimaryForeground: "var(--primary-foreground)",
              colorMuted: "var(--muted)",
              colorMutedForeground: "var(--muted-foreground)",
              colorBorder: "var(--border)",
              colorInput: "var(--input)",
              colorInputForeground: "var(--foreground)",
              colorRing: "var(--ring)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-inter), var(--font-sans), sans-serif",
            },
          }}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Toaster richColors closeButton position="bottom-right" />
        </ClerkProvider>
      </body>
    </html>
  );
}
