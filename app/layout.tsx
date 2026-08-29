import type { Metadata } from 'next';
import './globals.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hanzi Flow — пазл для изучения китайских иероглифов',
  description: 'Собирайте иероглифы из фрагментов, открывайте уровни и пройдите испытание Шифу.',
  openGraph: {
    title: 'Hanzi Flow — пазл китайских иероглифов',
    description: 'Собери иероглиф. Запомни смысл.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanzi Flow — пазл китайских иероглифов',
    description: 'Собери иероглиф. Запомни смысл.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
