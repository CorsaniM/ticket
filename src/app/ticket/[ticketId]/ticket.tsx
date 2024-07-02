"use client"
import { useRouter } from 'next/router';
import { api } from 'app/trpc/react';
import { Alert, AlertTitle, AlertDescription } from "app/app/_components/ui/tarjeta";

export default function TicketPage(props:{params:{ticketId: string}}) {
  const id = props.params.ticketId
  const ticket = api.tickets.get.useQuery({ id: parseInt(id) }).data;

  console.log(id)

  return (
    <div className="px-10 py-4">
      <Alert>
        <AlertTitle>{ticket!.name}</AlertTitle>
        <AlertDescription>
          ID: {ticket!.id} <br />
          Description: {ticket!.description}
        </AlertDescription>
      </Alert>
    </div>
  );
}
