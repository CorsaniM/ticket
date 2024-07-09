import { api } from "app/trpc/react";
import NotificacionGenerica from "./new-not";
import { List, ListTile } from "../ui/list";
import { Title } from "../ui/title";
import Link from "next/link";

export default function Notificaciones() {

    const tickets = api.tickets.list.useQuery().data

    return(
        <div className="px-10 py-4">
            <NotificacionGenerica id={5}/>
            <NotificacionGenerica id={6}/>
            <NotificacionGenerica id={7}/>
     

     <Link href={`/pages-supp/example`}>EJemplo</Link>
            <List>
          {tickets ? (
            tickets.map((tickets) => {
              return (
                <ListTile
                  key={tickets.id}
                  leading={tickets.message.find((x) => x.id === 0)?.id}
                  href={`/dashboard/management/client/health_insurances/${tickets.id}`}
                  title={tickets.title}
                />
              );
            })
          ) : (
            <Title>No existe ninguna ticket</Title>
          )}
        </List>
     
        </div>
    )
}