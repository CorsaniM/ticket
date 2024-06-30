"use client"


import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"


export default function Tickets() {
  
  const user = useUser();
  
  const tickets = api.tickets.getByUser.useQuery({userId: user.user!.id}).data;


    return(
    <div className="w-7/8 p-20">
        <List>
          {tickets 
          && tickets?.map((tickets) => {
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
    )
}