"use client"

import { api } from "app/trpc/react";


export default function InfoTicket(props: {id: number}) {
        const { id } = props; 
        const ticket = api.tickets.get.useQuery({id}).data;
      
          return(
          <div className="w-7/8 p-20">
                <div>
                        title={ticket?.name}
                    <h1>{ticket?.description} </h1>
                </div>
              </div>
          )
}