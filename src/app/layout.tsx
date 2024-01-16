import { createClient } from '@/prismicio';
import { isFilled } from '@prismicio/client';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { globalFontVariables } from '@/styles/scripts/fonts';
import './globals.scss';
import type { Metadata } from 'next';

export async function generateMetadata() {
  const client = createClient();
  const {
    data: { favicon, site_name, site_description },
  } = await client.getSingle('settings');

  const title = isFilled.keyText(site_name) ? site_name : '';
  const description = isFilled.keyText(site_description) ? site_description : '';
  const icon = isFilled.image(favicon) ? favicon.url : undefined;

  const metadata: Metadata = {
    metadataBase: new URL('https://ryantoddgarza.com'),
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    icons: {
      icon: icon,
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function getBodyClasses(): string {
    let classes: string[] = [];

    globalFontVariables.forEach((variable) => classes.push(variable));

    return classes.join(' ');
  }

  return (
    <html lang="en">
      <body className={getBodyClasses()}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
