"use client"

import { api } from "app/trpc/react"
import { List, ListTile } from "app/app/_components/list"
import { useUser } from "@clerk/nextjs"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { message } from "app/server/db/schema";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/tarjeta";


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

