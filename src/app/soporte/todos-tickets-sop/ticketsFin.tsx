import Tickets from "app/app/ticket/page"
import { Title } from "app/app/_components/ui/title"
import { api } from "app/trpc/react";
import { SelectGroup, SelectItem, SelectLabel } from "@radix-ui/react-select";

export default function TodosTickets() {
    const {data: tickets} =api.tickets.list.useQuery();
    const ticketurg = tickets?.filter((urgency)=> urgency.state === "Importancia")
    const ticketorg = tickets?.filter((organization)=> organization.state === "Empresa")
    const messuserid = tickets?.filter((userid)=> userid.state === "Id")

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Todos los tickets</Title>
                <Tickets />
            </div>

            <SelectGroup>
          <SelectLabel>Nivel de urgencia</SelectLabel>
          <SelectItem value="1">Leve</SelectItem>
          <SelectItem value="3">Moderado</SelectItem>
          <SelectItem value="5">Urgente</SelectItem>
        </SelectGroup>

        </div>
    )
}