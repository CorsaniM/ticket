import { api } from "app/trpc/react";
import { List, ListTile } from "../ui/list";
import { Title } from "../ui/title";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function Notificaciones() {

    const mensaje = api.message.list.useQuery().data
    const mensajesNuevos = mensaje?.filter((x)=>x.state == "no leido")
    return(
            <List>
          {mensajesNuevos ? (
            mensajesNuevos.map((mensaje) => {
              return (
                <div className="mx-3" >
                <ListTile
                  key={mensaje.id}
                  leading={mensaje.description}
                  href={`ticket/${mensaje.ticketId}`}
                  title={`Nueva notificación: ` + mensaje.title}
                  />
                <hr className="border-black"/>
              </div>
              );
            })
          ) : (
            <Title>No existe ninguna ticket</Title>
          )}
        </List>
    )
}