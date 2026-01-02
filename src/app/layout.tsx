import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
