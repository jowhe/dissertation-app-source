import Navbar from '@/components/interface/navbar';
import type {Metadata} from 'next';
import localFont from "next/font/local";
import "@/app/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata: Metadata = {
  title: 'Task Tracker',
  description: 'Track your tasks'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html className='dark' lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}