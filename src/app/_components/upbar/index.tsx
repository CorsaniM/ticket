"use client"
import { SignInButton, SignedIn, SignedOut, UserButton, useOrganization } from "@clerk/nextjs";

export default function Upbar() {
    const { organization } = useOrganization();

    return (
        <div className="w-screen h-16 shadow-md flex justify-between items-center px-4 font-serif">
            <div className="text-lg">
                <h1>Bienvenido equipo de soporte {organization?.name}!</h1>
            </div>
            <div className="flex items-center p-5">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
}