"use client"
import { useOrganization } from "@clerk/nextjs";
import NotiSupp from "./pages-supp/notifications/page";
import { redirect } from "next/navigation";


export default function Page() {
const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
return (
    <NotiSupp/>
            )
}  
else{
    return redirect("client")
}

}
