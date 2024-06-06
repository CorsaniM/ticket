import Link from "next/link";
import { usePathname } from "next/navigation";
  import {MessageCircle, Clipboard, FileText} from "lucide-react";
  import SidenavProps, { SidenavItem, SidenavSeparator } from "../sidenav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

    export default function Sidenav() {
        // const menu: Record<string, string> = {
        //   Crear: "/",
        //   Tickets: "tickets/",
        //   Respuestas: "respuestas/",
        // };
        // const pathname = usePathname();
        // const isActive = (href: keyof typeof menu) => {
        //   if (href !== undefined) {
        //     if (href in menu) {
        //       const menuValue = menu[href];
        //       if (menuValue !== undefined) {
        //         return pathname.includes(menuValue);
        //       }
        //     }
        //   }
        // };


        return (
            <SidenavProps className="h-full bg-[#e9fcf8]">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <h1>hola</h1>
            <SidenavItem
                    icon={< MessageCircle />}
                    href={`/dashboard/`}
                >
                    Craer tickets
                </SidenavItem>
                <SidenavItem
                    icon={< Clipboard />}
                    href={`/dashboard/tickets`}
                >
                    Mis tickets
                </SidenavItem>
                <SidenavItem
                icon={< FileText />}
                    href={`/dashboard/respuestas`}
                >
                    Respuestas
                </SidenavItem>
            </SidenavProps>
        );
        }
        
        
