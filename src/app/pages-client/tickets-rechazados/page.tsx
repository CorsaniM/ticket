"use client"

import { use, useState } from "react"
import { api } from "app/trpc/react"
import { Input } from "app/app/_components/ui/input"

import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useOrganization, useUser } from "@clerk/nextjs"

export default function SuportPage() {

    const { mutateAsync: createTicket, isPending } = api.tickets.create.useMutation()
    


    
    const [description, setDescription] = useState("")
    const [motivo, setMotivo] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [image, setImage] = useState<File | null>(null)
    
    const { user } = useUser();
    const { organization } = useOrganization();

    const [open, setOpen] = useState(false)
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <div className="w-7/8 p-20">
                   
                </div>
            </div>
        </div>
    )
}
function sessionClaims(): { session: any } {
    throw new Error("Function not implemented.")
}

