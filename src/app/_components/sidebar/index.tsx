"use client"
import {

    MailPlus,
    Mails,
    MessageCircle,
  } from "lucide-react";
import Sidenav, { SidenavItem } from '../sidenav';

export default function Sidebar() {
    return (
        <Sidenav>
            <SidenavItem icon={<MailPlus />} href="/">
                Crear Tickets
            </SidenavItem>


                <SidenavItem
                icon={<Mails />}
                href="/tickets"
                >
                Mis Tickets
            </SidenavItem>

            <SidenavItem
                icon={<MessageCircle />}
                href="/respuestas"
            >
                Respuestas
            </SidenavItem>
        </Sidenav>
    )
}