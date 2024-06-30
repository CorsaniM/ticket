"use client"

import Tickets from "app/app/_components/tickets/page"

export default function Page() {

    return (
        <div className="h-screen">
            <div className="flex">
                <h1 className="flex"> Tickets Pendientes</h1>
                <Tickets />
            </div>
        </div>
    )
}
