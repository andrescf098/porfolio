import { Footer } from 'app/components/shared/Footer';
import { Header } from 'app/components/shared/Header';
import { PT_Sans } from 'next/font/google';
import '../css/globals.css';

const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={ptSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
