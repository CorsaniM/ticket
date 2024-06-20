"use server"

import { api } from "app/trpc/server"
import { currentUser } from "@clerk/nextjs/server"
import { List, ListTile } from "app/app/_components/list"

export default async function Page() {
    const user = await currentUser();

    if (!user) {
        return <div>Loading...</div>
    }


    const ticketsPropios = await api.tickets.getByUser({ userId: user.id });


    console.log(user?.id)

    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <div className="w-7/8 p-20">
                    {ticketsPropios ? (
                        <List>
                            {ticketsPropios?.map((ticket) => (
                                <div key={ticket.id}>
                                    <ListTile
                                        title={ticket.name}
                                    />
                                    <h1>{ticket.description}</h1>
                                </div>
                            ))}
                        </List>
                    ) : (
                        <div>
                            <h1>No se encontraron tickets a su nombre</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
