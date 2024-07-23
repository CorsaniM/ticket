"use client"

import Tickets from "app/app/_components/tickets/page"
import { Title } from "app/app/_components/ui/title"

export default function Page() {

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Tickets finalizados</Title>
                <Tickets />
            </div>
        </div>
    )
}