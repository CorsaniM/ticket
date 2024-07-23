import React, { useState } from 'react';
import Notificaciones from '../notificaciones/page';
import CrearTicket from '../tickets/crearTicket/page';
import Finalizados from 'app/app/client/tickets-finalizados/page';
import Tickets from '../tickets/page';
import { api } from 'app/trpc/react';



export default function Dashboard() { 
  const {data: tickets} =api.tickets.list.useQuery();
  
  return(
    <div className='flex flex-col'>
      <h1>Dashboard</h1>
      <h1>Tickets creados: 
        {tickets?.length}
      </h1>
      <h1>Tickets pendientes:</h1>
    </div>
  )
};