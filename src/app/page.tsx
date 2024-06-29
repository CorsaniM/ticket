"use client"
import { useOrganization } from "@clerk/nextjs";
import ClientPage from "./clientPage";
import SuportPage from "./suportPage";




export default function Page() {


const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
return (
<div>
    <SuportPage />
</div>)
}  
else{
    return(
        <ClientPage/>
    )
}

}
