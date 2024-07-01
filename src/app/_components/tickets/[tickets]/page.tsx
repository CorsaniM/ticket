"use client";

import { api } from "app/trpc/react";
import { List, ListTile } from "app/app/_components/list";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Page() {
    const { user } = useUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    const tickets = api.tickets.getByUser.useQuery({ userId: user!.id }).data;

    return (
                <div className="w-7/8 p-20">
                    <List>
                        {tickets ? (
                            tickets.map((ticket) => (
                                <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
                                    <ListTile
                                        title={ticket.name}
                                    />
                                    <h1>{ticket.description}</h1>
                                </Link>
                            ))
                        ) : (
                            <div>
                                <h1>No se encontraron tickets a su nombre</h1>
                            </div>
                        )}
                    </List>
                </div>
    );
}
