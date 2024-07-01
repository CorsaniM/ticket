"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { notification } from "app/server/db/schema";
import Link from "next/link";


export default function NotificacionGenerica(props: {id: number}) {
  const { id } = props; 
  const notification = api.tickets.get.useQuery({id}).data;

    return(
    <div className="w-7/8 p-20">
          <Link href={`/tickets/${notification?.id}`} key={notification?.id}>
              <ListTile
                  title={notification?.name}
              />
              <h1>{notification?.description} </h1>
          </Link>
        </div>
    )
}
