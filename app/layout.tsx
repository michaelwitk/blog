import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
// import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Script from 'next/script'

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'michael_witk Blog',
        template: '%s | michael_witk Blog',
    },
    description: 'michael_witk Blog',
    openGraph: {
        title: 'michael_witk Blog',
        description: 'michael_witk Blog',
        url: baseUrl,
        siteName: 'Blog',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-[#1c1c1c]',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    {/* <Navbar /> */}
                    <div>
                        <p className="mb-4">
                            <a
                                href="https://x.com/michael_witk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                michael_witk on 𝕏 (Twitter)
                            </a>
                        </p>
                    </div>
                    {children}
                    <Footer />
                </main>
            </body>
            <Script src="https://api.michaelwitk.com/latest.js" />
        </html>
    )
}
