import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
export const metadata: Metadata = {
  title: {
    template: '%s | Jobs Applied Dashboard',
    default: 'Jobs Applied Dashboard',
  },
  description: 'Demo website that indicates which jobs you have applied to',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
