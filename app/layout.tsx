import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Mein Stein",
  description: "Discover unique handmade jewelry and accessories.",
};

export default function RootLayout({
  children,
  }: Readonly<{
      children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body>
        
        <CartProvider>
          <Navbar />         
          {children}
        </CartProvider>
       
        <Footer />
      </body>
    </html>
  );
}


