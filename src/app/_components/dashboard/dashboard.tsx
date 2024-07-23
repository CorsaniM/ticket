import React, { useState } from 'react';
import Notificaciones from '../notificaciones/page';
import CrearTicket from '../tickets/crearTicket/page';
import Finalizados from 'app/app/pages-client/tickets-finalizados/page';
import Tickets from '../tickets/page';



export default function Dashboard() { 
  return(
    <div>
      <h1>Dashboard</h1>
      <h1>Tickets creados:</h1>
      <h1>Tickets pendientes:</h1>
    </div>
  )
};