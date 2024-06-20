"use server"


import { api } from "app/trpc/server"
import { currentUser } from "@clerk/nextjs/server"
import { List, ListTile } from "app/app/_components/list"


export default async function page() {
  
    const tickets = await api.tickets.list()
    const user = await currentUser();
  console.log(user!.id)
    const ticketsPropios =  tickets.filter((ticket) => ticket.user === user!.id)

    console.log(user?.id)

    return(
    <div className="h-screen">
        <div className="flex h-screen">
        <div className="w-7/8 p-20">
        <List>
          {ticketsPropios 
          && ticketsPropios?.map((tickets) => {
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