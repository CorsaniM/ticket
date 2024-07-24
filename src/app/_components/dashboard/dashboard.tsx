import React, { useState } from 'react';
import Notificaciones from '../notificaciones/page';
import CrearTicket from 'app/app/ticket/crearTicket/page';
import Finalizados from 'app/app/client/tickets-finalizados/page';
import Tickets from 'app/app/ticket/page';
import { api } from 'app/trpc/react';
import { Title } from '../ui/title';



export default function Dashboard() { 
  const {data: tickets} =api.tickets.list.useQuery();
  const ticketpend = tickets?.filter((pend)=> pend.state === "Pendiente")
  const ticketasig = tickets?.filter((asig)=> asig.state === "Asignado")
  const ticketfin = tickets?.filter((fin)=> fin.state === "Finalizado")
  
  
  return(
    <div className='flex flex-col'>
      <Title>Dashboard</Title>
      <h1>Tickets creados: 
        {tickets?.length}
      </h1>
      <h1>Tickets pendientes:
      {ticketpend?.length}
      </h1>
      <h1>Tickets asignados:
      {ticketasig?.length}
      </h1>
      <h1>Tickets finalizados:
      {ticketfin?.length}
      </h1>
    </div>
  )
};