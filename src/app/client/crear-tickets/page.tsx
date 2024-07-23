"use client"
import { Title } from "app/app/_components/ui/title"
import CrearTicket from "app/app/_components/tickets/crearTicket/page"

export default function ClientPage() {
    return (
        <div className="flex-auto px-4 mt-20 mx-4">
            <Title>Crear nuevo ticket</Title>
            <CrearTicket/>
        </div>
    )
}



