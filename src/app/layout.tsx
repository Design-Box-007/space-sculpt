import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/comman/Navbar";
import Footer from "@/components/comman/Footer";
import { ToastContainer, Zoom } from "react-toastify";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Space Sculpt",
  description: "Space Sculpt transforms spaces with modern, stylish, and functional interior designs. Explore our work and get inspired!",
  other: {
    "google-site-verification": "FHO8xfEZFaPS-_zxN7BcW0EB4m-i6UzKqVhcJzO1qUg",
  },
};


// Load Satoshi Variable Font
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  weight: "300 900", // Variable weight range
  variable: "--font-satoshi", // Custom CSS variable for Tailwind usage
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WVB2BC57SL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WVB2BC57SL');
          `}
        </Script>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
