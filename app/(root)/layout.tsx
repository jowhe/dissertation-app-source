import type {Metadata} from 'next';


const metadata: Metadata = {
  title: 'Task Tracker',
  description: 'Track your tasks'
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}