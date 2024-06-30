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

export default function Sidebar() {

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
        <Sidenav>
            <SidenavItem
                icon={<Bell />}
                href="/pages-client/notificaciones">
                    Notificaciones
            </SidenavItem>
            <SidenavItem 
                icon={<Mails />} 
                href="/pages-client/crear-tickets">
                    Crear ticket
            </SidenavItem>
            <SidenavItem
                icon={<MailOpen />}
                href="/pages-client/tickets-pendientes">
                    Tickets pendientes
            </SidenavItem>
            <SidenavItem
                icon={<MailCheck />}
                href="/pages-client/tickets-resueltos">
                    Tickets resueltos
            </SidenavItem>
            <SidenavItem
                icon={<MailX />}
                href="/pages-client/tickets-rechazados">
                    Tickets rechazados
            </SidenavItem>
            <SidenavItem
                icon={<MessageCircle />}
                href="/pages-client/respuestas">
                    Respuestas
            </SidenavItem>
        </Sidenav>
        )
    } 
}