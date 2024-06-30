"use client"
import { useOrganization } from "@clerk/nextjs";
import Notificaciones from "./_components/notificaciones/page";
import { Title } from "./_components/ui/title";


export default function Page() {
const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
return (
<div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Notificaciones</Title>
                <Notificaciones />
            </div>
        </div>)
}  
else{
    return (
        <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Notificaciones</Title>
                <Notificaciones />
            </div>
        </div>
    )
}

}
