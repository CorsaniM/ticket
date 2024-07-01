"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { notification } from "app/server/db/schema";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alerta";


export default function NotificacionGenerica(props: {id: number}) {
  const { id } = props; 
  const notification = api.tickets.get.useQuery({id}).data;

    return(
      <div>
      <Alert>
      <Terminal className="w-7/8 p-20" />
      <Link href={`/tickets/${notification?.id}`} key={notification?.id}></Link>
      <AlertTitle>{notification?.name}</AlertTitle>
      <AlertDescription>
      <h1>{notification?.description} </h1>
      </AlertDescription>
    </Alert>
        </div>
    )


}
