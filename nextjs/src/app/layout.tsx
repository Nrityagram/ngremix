import type { Metadata } from 'next'
import { Header, Footer, Sidebar } from '@/components'
import { siteMetadata } from '@/lib/metadata'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: {
    default: `${siteMetadata.title} | Nrityagram Dance Village, India`,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.url,
    title: `${siteMetadata.title} | Nrityagram Dance Village, India`,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.OGImage}?v=2`,
        alt: 'Nrityagram OpenGraph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nrityagram',
    creator: '@nrityagram',
    title: `${siteMetadata.title} | Nrityagram Dance Village, India`,
    description: siteMetadata.description,
    images: [siteMetadata.OGImage],
  },
  icons: {
    icon: '/img/ng-logo-favicon.png',
    shortcut: '/img/ng-logo-favicon.png',
  },
  authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-166089693-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-166089693-1');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "myto1pp43h");
            `,
          }}
        />
        {/* Font Preloading */}
        <link rel="preload" href="/fonts/EBGaramond-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EBGaramond-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EBGaramond-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EBGaramond-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EBGaramond-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lato-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lato-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lato-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lato-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lato-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lato-Hairline.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
          <Sidebar />
        </main>
      </body>
    </html>
  )
}
