"use client"

import { use, useState } from "react"
import { api } from "app/trpc/react"
import { Input } from "app/app/_components/ui/input"

import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useOrganization, useUser } from "@clerk/nextjs"

export default function CrearTicket() {

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
                user: user!.id, 
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
            <div className="flex flex-col m-4">
                <div className="h-1/5 flex flex-col m-2">
                    <div className="flex flex-row gap-6">
                        <div className="flex-auto w-1/2 text-center">
                            <h1>Ingrese el motivo de su ticket</h1>
                        </div>
                        <div className="flex-auto w-1/2 text-center">
                            <h1>Ingrese el nombre de la empresa</h1>
                        </div>
                    </div> 
                    <div className="flex flex-row gap-6">
                        <div className="flex-auto w-1/2 align-center">
                        <Input
                            value={motivo}
                            placeholder='Motivo...'
                            onChange={(e) => setMotivo(e.target.value)}
                        />
                        </div>
                        <div className="flex w-1/2">
                        <Input
                            value={empresa}
                            placeholder='Nombre de la empresa...'
                            onChange={(e) => setEmpresa(e.target.value)}
                        />
                        </div>
                    </div>    
                </div>
                <div className="h-1/5 flex flex-col m-2 text-center">
                    <h1>Ingrese una descripción de su ticket</h1>
                    <textarea
                        className="resize-y h-36 w-full border border-gray-300 p-2"
                        value={description}
                        placeholder='Descripción...'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="h-1/5 flex flex-col m-2 text-center">
                    <h1>Opcional* ingrese una imagen</h1>
                    <Input
                        type="file"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>
                <button
                    className="m-4 px-4 py-2 text-black rounded disabled:opacity-50 rounded-full bg-slate-200 hover:bg-slate-300"
                    disabled={isPending}
                    onClick={handleCreate}
                >
                    {isPending ? "Creando..." : "Crear ticket"}
                </button>
            </div>
    )
}