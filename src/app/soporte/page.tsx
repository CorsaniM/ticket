"use client"
import Dashboard from "../_components/dashboard/dashboard";
import Notificaciones from "../_components/notificaciones/page";
import Buttons from "../_components/sidebar";
import Tickets from "app/app/ticket/page";
import { Title } from "../_components/ui/title";


export default function Page(){
    return (
        <div className="h-screen w-screen pt-16 grid grid-rows-5 grid-flow-col">

        <div className='list-none place-content-center'>
            <Buttons/>
        </div>
        
        
        <div className='flex row-span-4 place-content-center max-h-full flex-column px-20'>
            <div className="flex flex-col align-center">
                <Title>Todos los tickets</Title>
                <Tickets />
            </div>
        </div>


        <div className='flex border-solid border-2 border-slate-500 row-span-1 bg-slate-300 place-content-right flex-column p-2'>
        <Dashboard/>
        </div>

        <div className='flex border-solid border-2 border-slate-500 row-span-4 bg-slate-200'>
            <div className="flex mt-3 flex-col align-center">
                <Title>Notificaciones</Title>
                <Notificaciones />
            </div>
            </div>
        </div>

        )
}