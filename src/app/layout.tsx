// css
import '../../styles/globals.css';

// components
import Header from '../../components/layout/Header/page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header />
        <div className='flex justify-center'>{children}</div>
      </body>
    </html>
  );
}
