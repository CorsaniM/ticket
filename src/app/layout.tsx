import "app/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "app/trpc/react";
import {
  ClerkProvider,
  useOrganization,
} from '@clerk/nextjs'
import Sidebar from "./_components/sidebar";
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
      <body>
      <div className="fixed top h-16 left-0 flex">
        <Upbar/>
      </div>
      <div className='fixed top-16 bottom-0 left-0 flex flex-col gap-2 p-2 pr-6 shadow-xl sm:flex h-full'>
      <Sidebar/>
      </div>
      <div className='pl-64 pt-11'>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
      </div>
      </body>
    </html>
    </ClerkProvider>
  );
}

