import "app/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "app/trpc/react";
import {
  ClerkProvider,
  useOrganization,
} from '@clerk/nextjs'
import Sidebar from "../_components/sidebar";
import Upbar from "../_components/upbar";
import { Toaster } from "../_components/ui/sonner";
import { SyncActiveOrganization } from "../_components/SyncActiveOrganization";
import { auth } from "@clerk/nextjs/server";
import Buttons from "../_components/sidebar";
import Dashboard from "../_components/dashboard/dashboard";
import NotiClient from "./notificaciones/page";
import { Title } from "../_components/ui/title";
import Notificaciones from "../_components/notificaciones/page";


export const metadata = {
  title: "Generar tickets",
  description: "IanTech",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function ClientLayout(props:{children?:React.ReactNode}) {


  const { userId, sessionClaims } = auth();

  
  return (
    <ClerkProvider>
      <SyncActiveOrganization membership={sessionClaims?.membership}/>
      <body className="h-screen">
        <div className="h-screen pt-16 grid grid-rows-4 grid-flow-col gap-1">
          <div className='list-none place-content-center'>
          <Buttons/>
          </div>

          <div className='flex row-span-3 place-content-center max-h-full flex-column px-20'>
            <TRPCReactProvider>{props.children}</TRPCReactProvider>
            <Toaster />
          </div>

        </div>
      </body>
    </ClerkProvider>
  );
}