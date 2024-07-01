"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "app/app/_components/ui/alert"
import { Terminal } from "lucide-react"

export default function Tickets() {
  const user = useUser();
  const ticketsPorUser = api.tickets.getByUser.useQuery({userId: user.user!.id}).data;
  const listacompleta = api.tickets.list.useQuery().data;

    return(
    <div className="w-7/8 p-20">
        <List>
          {listacompleta 
          && listacompleta?.map((ticket) => {
            return (
              
              <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
                 <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>{ticket.name}</AlertTitle>
                  <AlertDescription>
                  {ticket.id} {ticket.description}
                  </AlertDescription>
                </Alert>
              </Link>
            );
          })}
        </List>
        </div>
    )
}


