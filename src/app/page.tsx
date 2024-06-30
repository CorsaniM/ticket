"use client"
import { useOrganization } from "@clerk/nextjs";



export default function Page() {


const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
return (
<div>

</div>)
}  
else{
    return( 
        <div>

</div>
    )
}

}
