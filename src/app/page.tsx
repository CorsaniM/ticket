"use client"

import { use, useState } from "react"
import { api } from "app/trpc/react"
import { Input } from "./_components/ui/input"

import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { OrganizationList, useOrganization, useOrganizationList, useUser } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default function Page() {

    const { mutateAsync: createTicket, isPending } = api.tickets.create.useMutation()
    
    const [description, setDescription] = useState("")
    const [motivo, setMotivo] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [image, setImage] = useState<File | null>(null)
    
    const { user } = useUser();



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
                console.log(data);
            }
            
            await createTicket({
                description: description,
                name: motivo,
                images: image?.name || "",
                orgId: user!.id,
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
            toast.error
        }
    }

    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <div className="w-7/8 p-20">
                    <div className="h-1/5 flex flex-col justify-center">
                        <div className="flex space-x-4">
                            <h1>Ingrese el motivo de su ticket</h1>
                            <h1>Ingrese el nombre de la empresa</h1>
                        </div>
                        <div className="flex space-x-4">
                            <Input
                                value={motivo}
                                placeholder='Motivo...'
                                onChange={(e) => setMotivo(e.target.value)}
                            />
                            <Input
                                value={empresa}
                                placeholder='Nombre de la empresa...'
                                onChange={(e) => setEmpresa(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="h-1/5 flex flex-col justify-center">
                        <h1>Ingrese una descripción de su ticket</h1>
                        <textarea
                            className="resize-y h-36 w-full border border-gray-300 p-2"
                            value={description}
                            placeholder='Descripción...'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="h-1/5 flex flex-col justify-center">
                        <h1>Opcional* ingrese una imagen</h1>
                        <Input
                            type="file"
                            onChange={(e) => setImage(e.target.files?.[0] || null)}
                        />
                    </div>
                    <button
                        className="px-4 py-2 text-black rounded disabled:opacity-50"
                        disabled={isPending}
                        onClick={handleCreate}
                    >
                        {isPending ? "Creando..." : "Crear ticket"}
                    </button>
                </div>
            </div>
        </div>
    )
}
