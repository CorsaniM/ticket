import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Upbar() {
    return(
        <div className="w-screen h-16">
            <div className="float-right p-3 mr-10">


            <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}