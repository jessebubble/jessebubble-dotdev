import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { RootLayout } from '~/RootLayout';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    { rel: 'icon', href: '/favicon.ico' },
];

export default function App() {
    return (
        <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <title>Where user interface meets web standards</title>
                <Meta />
                <Links />
            </head>
            <body className="flex min-h-full flex-col">
                <RootLayout>
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </RootLayout>
            </body>
        </html>
    );
}
