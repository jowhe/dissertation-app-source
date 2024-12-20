import FullNav from '@/components/interface/FullNav';
import { ThemeProvider } from '@/context/ThemeContext';

import "@/app/globals.css";

export default function Layout({
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