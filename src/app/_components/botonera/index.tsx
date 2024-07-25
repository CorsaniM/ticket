"use client"
import {
    Bell,
    Inbox,
    MailCheck,
    MailOpen,
    MailPlus,
    MailX,
    Mails,
    MessageCircle,
  } from "lucide-react";
import Sidenav, { SidenavItem } from '../sidenav';
import { useOrganization } from "@clerk/nextjs";

export default function Buttons() {

    const organization = useOrganization()

    if(organization.organization?.name === "IanTech"){
    return (
        <Sidenav>
            <SidenavItem
                icon={<Bell />}
                href="/pages-supp/notifications">
                    Notificaciones
            </SidenavItem>
            <SidenavItem 
                icon={<Mails />} 
                href="/pages-supp/new-tickets">
                    Nuevos tickets
            </SidenavItem>
            <SidenavItem
                icon={<MailOpen />}
                href="/pages-supp/in-process-tickets">
                    Tickets asignados
            </SidenavItem>
            <SidenavItem
                icon={<MailCheck />}
                href="/pages-supp/finished-tickets">
                    Tickets resueltos
            </SidenavItem>
            <SidenavItem
                icon={<MailX />}
                href="/pages-supp/rejected-tickets">
                    Tickets rechazados
            </SidenavItem>
            <SidenavItem
                icon={<MessageCircle />}
                href="/pages-supp/messages">
                    Mensajes
            </SidenavItem>
        </Sidenav>
        )
    }  
    else{
        return (
        <div className="w-full flex gap-2 place-content-center">
            <SidenavItem 
                icon={<MailPlus />} 
                href="/client/crear-tickets">
                    Crear ticket
            </SidenavItem>
            <SidenavItem
                icon={<MailCheck />}
                href="/client/tickets-finalizados">
                    Tickets Finalizados
            </SidenavItem>
            <SidenavItem
                icon={<MailX />}
                href="/client/todos-tickets">
                    Todos los tickets
            </SidenavItem>
        </div>
        )
    } 
}