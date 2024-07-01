"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { notification } from "app/server/db/schema";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/tarjeta";


export default function NotificacionGenerica(props: {id: number}) {
  const { id } = props; 
  const notification = api.tickets.get.useQuery({id}).data;

    return(
      <div>
        <Link href={`/tickets/${notification?.id}`} key={notification?.id}>
          <Alert>
            <AlertTitle>{notification?.name}</AlertTitle>
            <AlertDescription>{notification?.description}</AlertDescription>
          </Alert>
        </Link>
      </div>
    )


}
