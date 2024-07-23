"use client"

import { api } from "app/trpc/react"
import { Alert, AlertTitle, AlertDescription } from "../ui/tarjeta";
import { Link } from "lucide-react";


export default function NotificacionGenerica(props: {id: number}) {
    const { id } = props; 
    const { data: message, isLoading, error } = api.tickets.get.useQuery({ id });
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading message</div>;
  
    return (
      <div>
        {message && (
          <Link href={`/tickets/${message.id}`} key={message.id}>
            <Alert className="p-3">
              <AlertTitle>{message.title}</AlertTitle>
              <AlertDescription>{message.description}</AlertDescription>
            </Alert>
          </Link>
        )}
      </div>
    );
  };

