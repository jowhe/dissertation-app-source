import FullNav from '@/components/interface/FullNav';
import type {Metadata} from 'next';
import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from '@/context/ThemeContext';

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
    <ThemeProvider>
      <html className='dark' lang='en'>
        <body>
          <FullNav />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}