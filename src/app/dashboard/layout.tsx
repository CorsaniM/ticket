import { ArrowLeftIcon } from 'lucide-react'
import AppLayout from '../_components/applayout' 

import { api } from 'app/trpc/server'
import Sidenav from '../_components/sidenav'


export default async function Layout(props: {
    children?: React.ReactNode
}){

    // TODO: chequear acceso a la empresa

    return (
        <AppLayout
            headerClass='bg-[#e9fcf8]'
            sidenavClass='top-0'
            sidenav={<Sidenav children={props.children} />} children={props.children}        >
    
        </AppLayout>
    )
}
