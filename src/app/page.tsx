"use client"
import { useOrganization } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default function Page() {
const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
    return redirect("soporte")
}  
else{
    return redirect("client")
}

}
