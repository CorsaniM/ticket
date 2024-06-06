import "app/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "app/trpc/react";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Sidenav from "./_components/sidenav";

export const metadata = {
  title: "Generar tickets",
  description: "IanTech",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

