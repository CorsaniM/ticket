"use client"

import { use, useState } from "react"
import { api } from "app/trpc/react"
import { Input } from "./_components/ui/input"

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


    async function handleCreate() {
        try {
            const formData = new FormData()
            
            if (image) {
                formData.append('file', image)
                
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });
            
                const data = await response.json();
            }
            
            await createTicket({
                description: description,
                name: motivo,
                images: image?.name || "",
                orgId: organization!.id,
                state: "subida",
                createdAt: new Date(),
                updatedAt: new Date(),
                user: user!.id, // Aquí obtenemos el ID del usuario desde el hook useUser
            })
            toast.success('ticket creado correctamente')
            router.refresh()
            setOpen(false)
        } catch (e) {
            setError('no se pudo crear el ticket')
            toast.error('no se pudo crear el ticket')
        }
    }

    return (
        <div className="h-screen">
            <h1>hola</h1>
        </div>
    )
}
function sessionClaims(): { session: any } {
    throw new Error("Function not implemented.")
}

