"use client"

import Tickets from "app/app/ticket/page"
import { Title } from "app/app/_components/ui/title"

export default function Asignados() {

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Tickets asignados</Title>
                <Tickets />
            </div>
        </div>
    )
}