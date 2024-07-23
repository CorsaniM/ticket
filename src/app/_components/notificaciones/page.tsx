import { api } from "app/trpc/react";
import { List, ListTile } from "../ui/list";
import { Title } from "../ui/title";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function Notificaciones() {

    const tickets = api.tickets.list.useQuery().data

    return(
            <List>
          {tickets ? (
            tickets.map((tickets: { id: Key | null | undefined; message: any[]; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => {
              return (
                <ListTile
                  key={tickets.id}
                  leading={tickets.message.find((x: { id: number; }) => x.id === 0)?.id}
                  href={`/dashboard/management/client/health_insurances/${tickets.id}`}
                  title={tickets.title}
                />
              );
            })
          ) : (
            <Title>No existe ninguna ticket</Title>
          )}
        </List>
    )
}