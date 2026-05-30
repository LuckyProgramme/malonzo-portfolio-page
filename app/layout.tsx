import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { personal } from '@/config/content.config';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.role}`,
  description: personal.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="bg-page text-ink font-mono antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
