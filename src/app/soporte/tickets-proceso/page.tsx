"use client"
import { Title } from "app/app/_components/ui/title"
import Tickets from "app/app/ticket/page"

export default function Proceso() {

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Tickets en proceso</Title>
                <Tickets />
            </div>
        </div>
    )
}
