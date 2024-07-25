"use client"
import { useRouter } from 'next/router';
import { api } from 'app/trpc/react';
import { Card, CardTitle, CardDescription } from "app/app/_components/ui/tarjeta";
import { List, ListTile } from 'app/app/_components/list';
import { Title } from 'app/app/_components/ui/title';

export default function TicketPage(props:{params:{ticketId: string}}) {
  const id = props.params.ticketId
  const ticket = api.tickets.get.useQuery({ id: parseInt(id) }).data;


  return (
    <div className="px-10 py-24 w-full md:px-20 lg:px-32 xl:px-40">
        {ticket ? (
      <Card>
        <div className='bg-stone-100 p-2 '>
          <div className='flex flex-row '>
            <div>
            <CardTitle>ID: {ticket!.id} - {ticket!.title}</CardTitle>
            Created: {new Date(ticket.createdAt).toLocaleString()}
            </div>
            <div className='flex-auto px-16'>
            Estado: {ticket!.state} <br />
            Urgencia: {ticket!.urgencia}
            </div>
          </div>

            <br />
            Description: {ticket!.description}
            {ticket.images ? (null) : (
              <h1>No contiene images adheridas</h1>
            )}
          <hr className='mt-3'/>
        </div>
        <div className='p-2'>
          <CardTitle>Mensajes:</CardTitle>
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
        <div className="h-1/5 flex flex-col m-2 text-center">
                    <h1>Ingrese un nuevo mensaje</h1>
                    <textarea
                        className="resize-y h-14 w-full border border-gray-300 p-2"
                        //value={message.description}
                        placeholder='Descripción...'
                        //onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
      </Card>
        ): (null)}
    </div>
  );
}
