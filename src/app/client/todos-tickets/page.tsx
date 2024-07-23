"use client"

import Tickets from "app/app/_components/tickets/page"
import { Title } from "app/app/_components/ui/title"

export default function TodosTickets() {

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Todos los tickets</Title>
                <Tickets />
            </div>
        </div>
    )
}
