"use client"
import { useRouter } from 'next/router';
import { api } from 'app/trpc/react';
import { Alert, AlertTitle, AlertDescription } from "app/app/_components/ui/tarjeta";

export default function page() {
  const router = useRouter();
  const { ticketId } = router.query;
  const tId = ticketId && !Array.isArray(ticketId) ? parseInt(ticketId, 10) : NaN;

  const { data: ticket, isLoading, error } = api.tickets.get.useQuery({ id: tId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="px-10 py-4">
      <Alert>
        <AlertTitle>{ticket?.name}</AlertTitle>
        <AlertDescription>
          ID: {ticket?.id} <br />
          Description: {ticket?.description}
        </AlertDescription>
      </Alert>
    </div>
  );
}
