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
import Buttons from "./_components/sidebar";
import Dashboard from "./_components/dashboard/dashboard";
import NotiClient from "./pages-client/notificaciones/page";
import { Title } from "./_components/ui/title";
import Notificaciones from "./_components/notificaciones/page";


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
        <div className="h-screen pt-16 grid grid-rows-4 grid-flow-col gap-1">

        <div className='list-none place-content-center'>
        <Buttons/>
        </div>

        <div className='flex row-span-3 place-content-center max-h-full flex-column px-20'>
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Toaster />
        </div>
        
        <div className='flex row-span-1 bg-slate-400 place-content-right flex-column pt-20'>
        <Dashboard/>
        </div>

        <div className='flex row-span-3 bg-slate-200'>
        <TRPCReactProvider>
          <NotiClient/>
        </TRPCReactProvider>
        </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}

