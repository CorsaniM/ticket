"use client"
import { useRouter } from 'next/router';
import { api } from 'app/trpc/react';
import { Alert, AlertTitle, AlertDescription } from "app/app/_components/ui/tarjeta";
import { List, ListTile } from 'app/app/_components/list';

export default function TicketPage(props:{params:{ticketId: string}}) {
  const id = props.params.ticketId
  const ticket = api.tickets.get.useQuery({ id: parseInt(id) }).data;


  return (
    <div className="px-10 py-24">
        {ticket ? (
      <Alert>
        <AlertTitle>{ticket!.title}</AlertTitle>
        <AlertDescription>
          ID: {ticket!.id} <br />
          Description: {ticket!.description}
          {ticket.images ? (null) : (
            <h1>No contiene images adheridas</h1>
          )}
        </AlertDescription>
        <div>
        <List>
          {ticket.message ? ticket.message.map((message) => (
            <ListTile
              key={message.id}
              title={message.title}
              leading={message.description}
            />
          )) : (<h1>No hay notificaciones</h1>)}
        </List>
        </div>
      </Alert>
        ): (null)}
    </div>
  );
}
