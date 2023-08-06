import './globals.css'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    preload: true,
    style: ["normal", "italic"],
});

export const metadata = {
  title: 'Twitter Clone',
  description: 'Twitter Clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${poppins.className}`}>
        {children}
      </body>
    </html>
  )
}
