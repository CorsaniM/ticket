import Dashboard from "../_components/dashboard/dashboard";
import Tickets from "../_components/tickets/page";
import { Title } from "../_components/ui/title";


export default function Page(){
    return (
        <div>
            <div className='flex row-span-1 bg-slate-400 place-content-right flex-column pt-20'>
                <Dashboard/>
            </div>

            <div className="flex-auto">
            <div className="flex flex-col align-center">
                <Title>Todos los tickets</Title>
                <Tickets />
            </div>
        </div>
        </div>
        )
}