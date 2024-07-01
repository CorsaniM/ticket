"use client"
import { OrganizationSwitcher, UserButton, useOrganization, useUser } from "@clerk/nextjs";
import { checkRole } from "app/lib/react/roles";


export default function Upbar() {
    const { organization } = useOrganization();
    const { user } = useUser()
    const isAdmin = checkRole("owner" || "page_owner")
    return (
        <div className="flex w-screen h-16 shadow-md justify-between items-center p-5 font-serif">
            <div className="text-lg">
                {organization?.name === "IanTech" ?(

                    <h1>Equipo de soporte {organization?.name}</h1>
                ) : (
                    <h1>¡Bienvenido {organization?.name}!</h1>
                )} 

            </div>
            <div className="flex items-center p-4">
                <div>
                    <OrganizationSwitcher hidePersonal={true}/>
                </div>
                <UserButton/>
            </div>
        </div>
    );
}
