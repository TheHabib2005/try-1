import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import NextTopLoader from 'nextjs-toploader';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign-in - SlideHub",
  description: "online man slides store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto sm:px-0 px-4`}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: '',
            duration: 1500,
            style: {
              background: '#2563EB',
              color: '#fff',
            },
            iconTheme: {
              primary: "#000",
              secondary: "green"
            },

            // Default options for specific types

          }}
        />
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <GoogleOAuthProvider clientId={process.env.GOOGLECLIENTID!}>
          {children}
        </GoogleOAuthProvider>

      </body>
    </html>
  );
}
