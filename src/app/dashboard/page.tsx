"use client"

import { useState } from "react"
import { api } from "app/trpc/react"
import Sidenav from "../_components/sidenav"
import { Input } from "../_components/ui/input"

import { useSession, useUser } from "@clerk/nextjs"


export default function Page() {

const user = useUser()

const session = useSession()

    const { mutateAsync: createTicket, isPending } = api.tickets.create.useMutation()
    


    const [description, setDescription] = useState("")
    const [motivo, setMotivo] = useState("")
    const [image, setImage] = useState("")

    async function handleCreate() {

            try {
                await createTicket({
                    description: description,
                    name: motivo,
                    images: image,
                    state: "subida",
                createdAt: new Date(),
                updatedAt: new Date(),
                user: session.session!.id,
                
            })
        } catch (e) {
        
    }
    }
    return (
        <div className="h-screen">
        <div className="flex h-screen">
            <div className="w-1/8">
                <Sidenav/>
                </div>
                <div className="w-7/8 p-20">
                    <div className="h-1/5 flex flex-col justify-center">
                        <h1>Ingrese el motivo de su tickets</h1>
                        <Input value={description} placeholder='...' onChange={(e) => setDescription(e.target.value)}></Input>
                    </div>
                    <div className=" h-1/5 flex flex-col justify-center">
                        <h1>Ingrese una descripcion de su tickets</h1>
                        <Input className="h-36" value={motivo} placeholder='...' onChange={(e) => setMotivo(e.target.value)}></Input>
                    </div>
                    <div className=" h-1/5 flex flex-col justify-center">
                        <h1>Opcional* ingrese una imagen</h1>
                        <Input value={image} placeholder='...' onChange={(e) => setImage(e.target.value)}></Input>
                    </div>
                </div>
                <button disabled={isPending} onClick={handleCreate}>
                                {isPending && "..."}
                                Crear ticket
                            </button>
            </div>
        </div>
    )
}
