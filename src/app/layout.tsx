import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dinesh Kumar S - Full Stack Developer',
  description: 'Portfolio of Dinesh Kumar S - Highly skilled full stack developer with expertise in React, Node.js, and modern web technologies.',
  keywords: 'Full Stack Developer, React, Node.js, JavaScript, TypeScript, Portfolio, Web Developer',
  authors: [{ name: 'Dinesh Kumar S' }],
  creator: 'Dinesh Kumar S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dineshkumar.dev',
    title: 'Dinesh Kumar S - Full Stack Developer',
    description: 'Portfolio of Dinesh Kumar S - Highly skilled full stack developer with expertise in React, Node.js, and modern web technologies.',
    siteName: 'Dinesh Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh Kumar S - Full Stack Developer',
    description: 'Portfolio of Dinesh Kumar S - Highly skilled full stack developer with expertise in React, Node.js, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <Script
          src="https://aloop-signals-service.icustomer.ai/api/v1/vi/pixel.js"
          data-workspace-id="cb48e2a3-9362-4ed8-b83f-f32ec34c7bee"
          strategy="afterInteractive"

        />


        <Script
          id="audience-loop-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,u,options){
                var j=d.createElement(s);j.async=true;j.src=u;
                j.onload=function(){
                  w.sgnl.ready=w.sgnl.init(options);
                  w.sgnl.ready.catch(function(error){
                    console.error('[Audience Loop] Pixel initialization failed',error);
                  });
                };
                j.onerror=function(){console.error('[Audience Loop] Pixel failed to load');};
                var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f);
              })(window,document,'script','https://signal-collector.icustomer.ai/sgnl.js',{
                workspace_id:'ws_1adfeee2-ef5e-4e26-a9e1-7f43543b63e2',
                public_key:'pk_live_lnKcUX9p0O0DiW3VZEvdsCDAJOZ6B4Rb',
                autoPage:true,
                consent:{
                  analytics:true,
                  advertising:true,
                  personalization:true
                },
                formCapture:{
                  enabled:true,
                  mode:'auto',
                  requireConsent:true
                }
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-accent-black via-accent-black-light to-accent-black-medium">
          {children}
        </div>
      </body>
    </html>
  )
}
