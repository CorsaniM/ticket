"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "../_components/ui/tarjeta";


export default function Tickets() {
  //const user = useUser();
  //const ticketsPorUser = api.tickets.getByUser.useQuery({userId: user.user!.id}).data;
  const listacompleta = api.tickets.list.useQuery().data;

    return(
    <div className="px-10 py-4">
        <List>
          {listacompleta 
          && listacompleta?.map((ticket) => {
            return (
              <div className="my-1">
              <Link href={`/ticket/${ticket.id}`} key={ticket.id}>
                 <Card className="hover:bg-stone-100 active:bg-stone-200">
                  <CardTitle>{ticket.title}</CardTitle>
                  <CardDescription>
                  ID:{ticket.id} {ticket.description}
                  </CardDescription>
                </Card>
              </Link>
              </div>
            );
          })}
        </List>
        </div>
    )
}