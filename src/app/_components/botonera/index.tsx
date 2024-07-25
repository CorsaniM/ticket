import {
    Bell,
    Inbox,
    MailCheck,
    MailOpen,
    MailPlus,
    MailSearch,
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
            <div className="w-full flex gap-2 place-content-center
         active:bg-stone-500">
                 <SidenavItem
                    icon={<MailOpen />}
                    href="/soporte/tickets-asignados">
                        Tickets asignados
                </SidenavItem>
                <SidenavItem 
                    icon={<MailSearch />} 
                    href="/soporte/tickets-proceso">
                        Tickets en proceso
                </SidenavItem>
                <SidenavItem
                    icon={<MailCheck />}
                    href="/soporte/todos-tickets-sop">
                        Tickets finalizados
                </SidenavItem>
                <SidenavItem
                icon={<Mails />}
                href="/client/todos-tickets">
                    Todos los tickets
            </SidenavItem>
            </div>
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
                icon={<Mails/>}
                href="/client/todos-tickets">
                    Todos los tickets
            </SidenavItem>
        </div>
        )
    } 
}