"use client"

import Notificaciones from "app/app/_components/notificaciones/page"
import { Title } from "app/app/_components/ui/title"

export default function NotiClient() {

    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Notificaciones</Title>
                <Notificaciones />
            </div>
        </div>
    )
}
