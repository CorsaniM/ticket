"use client"
import { useState } from "react"

import { api } from "app/trpc/react"
import { Session, auth } from "@clerk/nextjs/server"
import Sidenav from "app/app/_components/sidenav"
import { useSession } from "@clerk/nextjs"
import { List, ListTile } from "app/app/_components/list"


export default function page() {
    const tickets = api.tickets.list.useQuery()
    
    const session = useSession()

    const ticketsPropios = tickets.data?.filter((ticket) => ticket.user === session.session?.id)

    

    return(
    <div className="h-screen">
        <div className="flex h-screen">
        <div className="w-7/8 p-20">
        <List>
          {ticketsPropios && ticketsPropios?.map((tickets) => {
            return (
            <div>

                <ListTile
                key={tickets.id}
                title={tickets.name}
                />
                <h1>{tickets.description}</h1>
            </div>
            );
          })}
        </List>
        </div>
    </div>
    </div>

    )
}