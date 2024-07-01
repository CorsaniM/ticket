"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "../ui/tarjeta";


export default function Tickets() {
  const user = useUser();
  const ticketsPorUser = api.tickets.getByUser.useQuery({userId: user.user!.id}).data;
  const listacompleta = api.tickets.list.useQuery().data;

    return(
    <div className="px-10 py-4">
        <List>
          {listacompleta 
          && listacompleta?.map((ticket) => {
            return (
              <div className="my-1">
              <Link href={`/_components/tickets/${ticket.id}`} key={ticket.id}>
                 <Alert>
                  <AlertTitle>{ticket.name}</AlertTitle>
                  <AlertDescription>
                  ID:{ticket.id} {ticket.description}
                  </AlertDescription>
                </Alert>
              </Link>
              </div>
            );
          })}
        </List>
        </div>
    )
}


