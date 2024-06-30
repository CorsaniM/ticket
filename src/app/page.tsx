"use client"
import { useOrganization } from "@clerk/nextjs";



export default function Page() {
const organization = useOrganization()

if(organization.organization?.name === "IanTech"){
return (
<div>
<h1>Hola</h1>
</div>)
}  
else{
    return( 
        <div>
            <h1>Hola</h1>
</div>
    )
}

}
