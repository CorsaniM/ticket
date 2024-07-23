"use client"

import Respuestas from "app/app/_components/respuestas/page"
import { Title } from "app/app/_components/ui/title"

export default function Page() {

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Respuestas</Title>
                <Respuestas />
            </div>
        </div>
    )
}


