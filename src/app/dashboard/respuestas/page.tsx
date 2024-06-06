"use client"
import { useState } from "react"

import { api } from "app/trpc/react"
import { date, datetime } from "drizzle-orm/mysql-core"
import { Session, auth } from "@clerk/nextjs/server"
import Sidenav from "app/app/_components/sidenav"


export default function page() {

    
    return(
    <div className="h-screen">
        <div className="flex h-screen">
        <div className="w-7/8 p-20">
            <h1>Respuestas</h1>
        </div>
    </div>
    </div>

    )
}