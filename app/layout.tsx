import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victoria Crest | Premium Halal Foods Malaysia",
  description:
    "Shop Victoria Crest premium halal sausages, burgers, pies and chicken products, crafted in Malaysia and delivered across the Klang Valley.",
  icons: { icon: "/victoria/crest.png", apple: "/victoria/crest.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth">
    
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
