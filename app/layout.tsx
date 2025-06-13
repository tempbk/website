import Navbar from '@/components/Navbar'; 

import Footer from '@/components/footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
      <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}