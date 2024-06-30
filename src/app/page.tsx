"use client"
import { useOrganization } from "@clerk/nextjs";
import NotiSupp from "./pages-supp/notifications/page";
import NotiClient from "./pages-client/notificaciones/page";


export default function Page() {
const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
return (
    <NotiSupp/>
            )
}  
else{
    return (
        <NotiClient/>
                )
}

}
