import "app/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "app/trpc/react";
import {
  ClerkProvider,
  useOrganization,
} from '@clerk/nextjs'
import Sidebar from "./_components/botonera";
import Upbar from "./_components/upbar";
import { Toaster } from "./_components/ui/sonner";
import { SyncActiveOrganization } from "./_components/SyncActiveOrganization";
import { auth } from "@clerk/nextjs/server";


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


  const { userId, sessionClaims } = auth();

  
  return (
    <ClerkProvider>
      <SyncActiveOrganization membership={sessionClaims?.membership}/>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="h-screen">
        <div className="fixed top h-16">
          <Upbar/>
        </div>
          <div className='flex'>
            <TRPCReactProvider>{children}</TRPCReactProvider>
            <Toaster />
          </div>
      </body>
    </html>
    </ClerkProvider>
  );
}

